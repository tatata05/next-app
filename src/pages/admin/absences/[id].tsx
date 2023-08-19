import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import AbsenceShow from "@/components/AbsenceShow";
import Link from "next/link";

export default function AdminAbsencesShow() {
  // 仮の時間を設定
  const startTime = new Date("5 17, 1998 18:00:00");
  const endTime = new Date("5 17, 1998 23:00:00");

  return (
    <>
      <MyHead title="欠勤詳細" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">欠勤詳細</h2>
        {/* TODO : absenceが存在しなければ
        <p>該当する欠勤は存在しません</p> */}
        <AbsenceShow
          name="従業員1"
          startTime={startTime.toLocaleString()}
          endTime={endTime.toLocaleString()}
          status="承認済み"
        />
        {/* TODO : 未承認であれば以下を表示 */}
        <div className="d-flex justify-content-center col-8 mx-auto text-center">
          <div className="col-3">
            {/* TODO : Link先の調整、statusを変更できるように (admin_absence_path(absence: {status: "approved"}) */}
            <Link href="/" className="btn btn-primary">
              承認
            </Link>
          </div>
          <div className="col-4">
            {/* TODO : Link先の調整、satusを変更できるように confirmも出力 (admin_absence_path(absence: {status: "rejected"})) ({confirm: "本当に却下してよろしいですか？"}) */}
            <Link href="/" className="btn btn-primary">
              却下
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
