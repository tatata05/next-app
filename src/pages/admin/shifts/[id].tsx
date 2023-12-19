// import ShiftAbsenceShow from "@/components/ShiftAbsenceShow";
import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import StatusButton from "@/components/StatusButton";

// 仮の時間を設定
// const startTime = new Date("5 17, 1998 18:00:00");
// const endTime = new Date("5 17, 1998 23:00:00");

// const rows = [
//   {
//     detailLabel: "従業員名",
//     detail: "I am 従業員",
//   },
//   {
//     detailLabel: "開始時間",
//     detail: startTime.toLocaleString(),
//   },
//   {
//     detailLabel: "終了時間",
//     detail: endTime.toLocaleString(),
//   },
//   {
//     detailLabel: "承認状況",
//     detail: "未承認",
//   },
// ];

export default function AdminShiftsShow() {
  // typeエラーが出ないために仮の関数
  const changeExample = async (example: any) => {
    console.log(example);
  };

  // 仮の時間を設定
  return (
    <>
      <MyHead title="シフト詳細" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">シフト詳細</h2>
        {/* TODO : <p>該当するシフトは存在しません</p> */}
        {/* <ShiftAbsenceShow rows={rows} /> 子コンポーネントを修正したことにより、エラーが発生するので仮でコメントアウト */}
        <div className="d-flex justify-content-center col-8 mx-auto text-center">
          <StatusButton
            changeStatus={() => changeExample("example")}
            statusLabel="承認"
          />
          <StatusButton
            changeStatus={() => changeExample("example")}
            statusLabel="却下"
          />
        </div>
      </main>
    </>
  );
}
