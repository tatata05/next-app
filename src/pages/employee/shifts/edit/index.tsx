import EmployeeHeader from "@/components/EmployeeHeader";
import MyHead from "@/components/MyHead";

export default function EmployeeShiftEdit() {
  return (
    <>
      <MyHead title="シフト編集" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">シフト編集</h2>
        {/* TODO : 編集フォームに修正 */}
        <form action="/" method="post">
          <div>
            <label>開始時刻</label>
            <input type="datetime-local" className="ms-3" />
          </div>
          <div className="mt-3">
            <label>終了時刻</label>
            <input type="datetime-local" className="ms-3" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-4">
              編集を保存する
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
