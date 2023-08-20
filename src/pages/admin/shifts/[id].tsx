import ShiftShow from "@/components/ShiftAbsenceShow";
import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import StatusButton from "@/components/StatusButton";

export default function AdminAdminsShow() {
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
        <ShiftShow
          name="従業員1"
          startTime={startTime.toLocaleString()}
          endTime={endTime.toLocaleString()}
          status="未承認"
        />
        <div className="d-flex justify-content-center col-8 mx-auto text-center">
          <StatusButton link="/" statusLabel="承認" />
          <StatusButton link="/" statusLabel="却下" />
        </div>
      </main>
    </>
  );
}
