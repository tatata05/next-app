import KintaiAdmin from "@/api/KintaiAdmin";
import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import ShiftAbsenceShow from "@/components/ShiftAbsenceShow";
import StatusButton from "@/components/StatusButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetAbsenceForAdmin200ResponseData as Absence } from "@/api/typescript-axios";

export default function AdminAbsencesShow() {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [absence, setAbsence] = useState<Absence>();
  const [updateAbsenceStatus, setUpdateAbsenceStatus] = useState<boolean>();
  // データフェッチの際、idはNumber型で指定している
  const id = Number(router.query.id);

  useEffect(() => {
    (async () => {
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
    })();
  }, [router.isReady, updateAbsenceStatus]);

  const statusJa = {
    unapproved: "未承認",
    approved: "承認",
    rejected: "却下",
  };

  const rows = absence
    ? [
        {
          detailLabel: "従業員名",
          detail: absence.employee.name,
        },
        {
          detailLabel: "開始時間",
          detail: absence.startTime.toLocaleString(),
        },
        {
          detailLabel: "終了時間",
          detail: absence.endTime.toLocaleString(),
        },
        {
          detailLabel: "承認状況",
          detail: statusJa[`${absence.status}`],
        },
      ]
    : [];

  type StatusProps = "approved" | "rejected";

  const changeStatus = async (afterStatus: StatusProps) => {
    await KintaiAdmin.updateAbsenceStatus(id, {
      status: afterStatus,
    });
    setUpdateAbsenceStatus(!updateAbsenceStatus);
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
            <ShiftAbsenceShow rows={rows} />
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
