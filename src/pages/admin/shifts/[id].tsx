import ShiftAbsenceShow from "@/components/ShiftAbsenceShow";
import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";

export default function AdminShiftsShow() {
  // 仮の時間を設定
  const startTime = new Date("5 17, 1998 18:00:00");
  const endTime = new Date("5 17, 1998 23:00:00");
  return (
    <>
      <MyHead title="シフト詳細" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">シフト詳細</h2>
        {/* TODO : <p>該当するシフトは存在しません</p> */}
        <ShiftAbsenceShow
          name="従業員1"
          startTime={startTime.toLocaleString()}
          endTime={endTime.toLocaleString()}
          status="未承認"
          link="/"
        />
      </main>
    </>
  );
}
