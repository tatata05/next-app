import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import ShiftAbsenceShow from "@/components/ShiftAbsenceShow";

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
        <ShiftAbsenceShow
          name="従業員1"
          startTime={startTime.toLocaleString()}
          endTime={endTime.toLocaleString()}
          status="承認済み"
          link="/"
        />
      </main>
    </>
  );
}
