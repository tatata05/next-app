import MyHead from "@/components/MyHead";
import EmployeeHeader from "@/components/EmployeeHeader";

export default function EmployeeHome() {
  return (
    <>
      <MyHead title="従業員ホーム" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5">従業員ホーム</h2>
        <div>
          <div className="mt-5">シフトカレンダー</div>
          <div className="mt-3">出勤申請</div>
          <div className="mt-3">欠勤申請</div>
          <div className="mt-3">通知一覧</div>
        </div>
      </main>
    </>
  );
}
