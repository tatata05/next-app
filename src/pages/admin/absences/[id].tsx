import KintaiAdmin from "@/api/KintaiAdmin";
import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import ShiftAbsenceShow from "@/components/ShiftAbsenceShow";
import StatusButton from "@/components/StatusButton";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { GetAbsenceForAdmin200ResponseData as Absence } from "@/api/typescript-axios";

export default function AdminAbsencesShow() {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [absence, setAbsence] = useState<Absence>();
  // データフェッチの際、idはNumber型で指定している
  const id = Number(router.query.id);

  const fetchAbsence = useCallback(async () => {
    // router.isReady はboolean。trueでないと、idがundefinedになってしまうため、trueの時にデータフェッチを行う。
    if (router.isReady) {
      try {
        const absenceRes = await KintaiAdmin.getAbsenceForAdmin(id);
        setAbsence(absenceRes.data.data);
      } catch (error) {
        // TODO: エラー処理と、その共通化
      }
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchAbsence();
  }, [fetchAbsence]);

  type StatusProps = "approved" | "rejected";

  const changeStatus = async (afterStatus: StatusProps) => {
    await KintaiAdmin.updateAbsenceStatus(id, {
      status: afterStatus,
    });
    fetchAbsence();
  };

  return (
    <>
      <MyHead title="欠勤詳細" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">欠勤詳細</h2>
        {isLoading ? (
          <>Loading...</>
        ) : absence ? (
          <>
            <ShiftAbsenceShow fetchData={absence} />
            <div className="d-flex justify-content-center col-8 mx-auto text-center">
              <StatusButton
                changeStatus={() => changeStatus("approved")}
                statusLabel="承認"
              />
              <StatusButton
                changeStatus={() => changeStatus("rejected")}
                statusLabel="却下"
              />
            </div>
          </>
        ) : (
          <p>該当する欠勤は存在しません</p>
        )}
      </main>
    </>
  );
}
