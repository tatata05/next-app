import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import NotificationTable, { RowType } from "@/components/NotificationTable";
import Link from "next/link";

const rows: RowType[] = [
  {
    isRead: true,
    kind: "application",
    shiftId: 1,
  },
  {
    isRead: false,
    kind: "application",
  },
  {
    isRead: false,
    kind: "approval_pending",
    shiftId: 2,
  },
  {
    isRead: true,
    kind: "approval_pending",
  },
  {
    isRead: true,
    kind: "unapplied",
  },
];

export default function AdminNotifications() {
  return (
    <>
      <MyHead title="通知一覧" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">通知一覧</h2>
        <div className="col-6 mb-4">
          {/* TODO : 表示一覧のソート機能(admin_notifications_path(:read => "false")) */}
          <Link href="/" className="btn btn-outline-primary">
            未読のみ
          </Link>
          {/* TODO : 表示一覧のソート機能(admin_notifications_path(:read => "true")) */}
          <Link href="/" className="btn btn-outline-primary">
            既読のみ
          </Link>
          {/* TODO : 表示一覧のソート機能(admin_notifications_path) */}
          <Link href="/" className="btn btn-outline-primary">
            既読のみ
          </Link>
        </div>
        <NotificationTable rows={rows} />
      </main>
    </>
  );
}
