import ShiftShow from "@/components/ShiftAbsenceShow";
import EmployeeHeader from "@/components/EmployeeHeader";
import MyHead from "@/components/MyHead";
import StatusButton from "@/components/StatusButton";

// 仮の時間を設定
const startTime = new Date("5 17, 1998 18:00:00");
const endTime = new Date("5 17, 1998 23:00:00");

// このページ編集時に、どういった表示をしたかったかわかりやすくするために残しておく。編集後は削除する
const rows = [
  {
    detailLabel: "従業員名",
    detail: "I am 従業員",
  },
  {
    detailLabel: "開始時間",
    detail: startTime.toLocaleString(),
  },
  {
    detailLabel: "終了時間",
    detail: endTime.toLocaleString(),
  },
  {
    detailLabel: "承認状況",
    detail: "未承認",
  },
];
console.log(rows);

export default function EmployeeShiftShow() {
  return (
    <>
      <MyHead title="シフト詳細" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">シフト詳細</h2>
        {/* TODO : <p>該当するシフトは存在しません</p> */}
        <ShiftShow />
        <div className="d-flex justify-content-center col-8 mx-auto text-center">
          <StatusButton statusLabel="編集" />
          <StatusButton statusLabel="取消" />
        </div>
      </main>
    </>
  );
}
