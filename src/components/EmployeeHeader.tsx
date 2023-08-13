import Link from "next/link";
import Stack from "react-bootstrap/Stack";

export default function AdminHeader() {
  return (
    <header className="bg-dark">
      <Stack direction="horizontal" gap={3}>
        {/* TODO : 遷移先が問題ないか最終チェックが必要 */}
        <Link href="/employee" className="p-2 text-light text-decoration-none">
          kintai
        </Link>
        <Link
          href="/employee/shifts"
          className="p-2 ms-auto text-light text-decoration-none"
        >
          シフトカレンダー
        </Link>
        <Link
          href="/employee/shifts/new"
          className="p-2 text-light text-decoration-none"
        >
          シフト申請
        </Link>
        <Link
          href="/employee/absences/new"
          className="p-2 text-light text-decoration-none"
        >
          欠勤申請
        </Link>
        <Link
          href="/employee/notifications"
          className="p-2 text-light text-decoration-none"
        >
          通知一覧
        </Link>
        <Link href="/logout" className="p-2 text-light text-decoration-none">
          ログアウト
        </Link>
      </Stack>
    </header>
  );
}
