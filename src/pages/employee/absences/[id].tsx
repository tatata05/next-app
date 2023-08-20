import EmployeeHeader from "@/components/EmployeeHeader";
import MyHead from "@/components/MyHead";
import AbsenceShow from "@/components/ShiftAbsenceShow";
import StatusButton from "@/components/StatusButton";

export default function AdminAbsencesShow() {
  // 仮の時間を設定
  const startTime = new Date("5 17, 1998 18:00:00");
  const endTime = new Date("5 17, 1998 23:00:00");

  return (
    <>
      <MyHead title="欠勤詳細" />
      <EmployeeHeader />
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
        {/* TODO : 以下の状態であればボタンを表示
        if current_employee.id == @absence.shift.employee_id && @absence.status == "unapproved" */}
        <div className="d-flex justify-content-center col-8 mx-auto text-center">
          <StatusButton link="/" statusLabel="取消" />
        </div>
      </main>
    </>
  );
}
