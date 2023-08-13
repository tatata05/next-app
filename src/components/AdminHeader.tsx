import Link from "next/link";
import Stack from "react-bootstrap/Stack";

export default function AdminHeader() {
  return (
    <header className="bg-dark">
      <Stack direction="horizontal" gap={3}>
        {/* TODO : 遷移先が問題ないか最終チェックが必要 */}
        <Link href="/admin" className="p-2 text-light text-decoration-none">
          kintai
        </Link>
        <Link
          href="/admin/admins"
          className="p-2 ms-auto text-light text-decoration-none"
        >
          管理者一覧
        </Link>
        <Link
          href="/admin/admins/new"
          className="p-2 text-light text-decoration-none"
        >
          管理者登録
        </Link>
        <Link
          href="/admin/employees"
          className="p-2 text-light text-decoration-none"
        >
          従業員一覧
        </Link>
        <Link
          href="/admin/employees/new"
          className="p-2 text-light text-decoration-none"
        >
          従業員登録
        </Link>
        <Link
          href="/admin/notifications"
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
