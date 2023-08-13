import MyHead from "@/components/MyHead";
import EmployeeHeader from "@/components/EmployeeHeader";
import Link from "next/link";

export default function EmployeeHome() {
  return (
    <>
      <MyHead title="従業員ホーム" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5">従業員ホーム</h2>
        <div className="row">
          <Link
            href="/employee/shifts"
            className="mt-5 text-dark text-decoration-none"
          >
            シフトカレンダー
          </Link>
          <Link
            href="/employee/shifts/new"
            className="mt-3 text-dark text-decoration-none"
          >
            出勤申請
          </Link>
          <Link
            href="/employee/absences/new"
            className="mt-3 text-dark text-decoration-none"
          >
            欠勤申請
          </Link>
          <Link
            href="/employee/notifications"
            className="mt-3 text-dark text-decoration-none"
          >
            通知一覧
          </Link>
        </div>
      </main>
    </>
  );
}
