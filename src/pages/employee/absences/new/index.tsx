import EmployeeHeader from "@/components/EmployeeHeader";
import MyHead from "@/components/MyHead";

export default function AdminAbsenceNew() {
  return (
    <>
      <MyHead title="欠勤申請" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">欠勤申請</h2>
        <form action="/" method="post">
          <label>シフトを選択して欠勤申請：</label>
          <select name="absenceNew" required>
            <option value="" selected hidden>
              選択してください
            </option>
            {/* TODO : 仮で表示、シフト開始時刻を取得 */}
            <option value="1">2023/12/31 18:00~</option>
            <option value="2">2024/01/01 17:00~</option>
          </select>
          <div>
            <button type="submit" className="btn btn-primary mt-4">
              欠勤申請をする
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
