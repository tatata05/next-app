import EmployeeHeader from "@/components/EmployeeHeader";
import MyHead from "@/components/MyHead";

export default function EmployeeShiftNew() {
  return (
    <>
      <MyHead title="シフト申請" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">シフト申請</h2>
        <form action="/" method="post">
          <div>
            <label>開始時刻</label>
            <input type="datetime-local" className="ms-3"></input>
          </div>
          <div className="mt-3">
            <label>終了時刻</label>
            <input type="datetime-local" className="ms-3"></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-4">
              シフト申請をする
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
