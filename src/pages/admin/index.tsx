import MyHead from "@/components/MyHead";
import AdminHeader from "@/components/AdminHeader";
import Link from "next/link";

export default function AdminHome() {
  return (
    <>
      <MyHead title="管理者ホーム" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5">管理者ホーム</h2>
        <div className="row">
          <Link
            href="/admin/shifts"
            className="mt-5 text-dark text-decoration-none"
          >
            シフトカレンダー
          </Link>
          <Link
            href="/admin/admins"
            className="mt-3 text-dark text-decoration-none"
          >
            管理者一覧
          </Link>
          <Link
            href="/admin/admins/new"
            className="mt-3 text-dark text-decoration-none"
          >
            管理者登録
          </Link>
          <Link
            href="/admin/employees"
            className="mt-3 text-dark text-decoration-none"
          >
            従業員一覧
          </Link>
          <Link
            href="/admin/employees/new"
            className="mt-3 text-dark text-decoration-none"
          >
            従業員登録
          </Link>
          <Link
            href="/admin/notifications"
            className="mt-3 text-dark text-decoration-none"
          >
            通知一覧
          </Link>
        </div>
      </main>
    </>
  );
}
