import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import ShiftAbsenceShow from "@/components/ShiftAbsenceShow";
import StatusButton from "@/components/StatusButton";

// 仮の時間を設定
const startTime = new Date("5 17, 1998 18:00:00");
const endTime = new Date("5 17, 1998 23:00:00");

const rows = [
  {
    key: 1,
    detailLabel: "従業員名",
    detail: "I am 従業員",
  },
  {
    key: 2,
    detailLabel: "開始時間",
    detail: startTime.toLocaleString(),
  },
  {
    key: 3,
    detailLabel: "終了時間",
    detail: endTime.toLocaleString(),
  },
  {
    key: 4,
    detailLabel: "承認状況",
    detail: "未承認",
  },
];

export default function AdminAbsencesShow() {
  return (
    <>
      <MyHead title="欠勤詳細" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">欠勤詳細</h2>
        {/* TODO : absenceが存在しなければ
        <p>該当する欠勤は存在しません</p> */}
        <ShiftAbsenceShow rows={rows} />
        <div className="d-flex justify-content-center col-8 mx-auto text-center">
          <StatusButton link="/" statusLabel="承認" />
          <StatusButton link="/" statusLabel="却下" />
        </div>
      </main>
    </>
  );
}
