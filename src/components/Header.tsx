import Link from "next/link";
import Stack from "react-bootstrap/Stack";

export default function Header() {
  return (
    <header className="bg-dark">
      <Stack direction="horizontal" gap={3}>
        <Link href="/" className="ms-2 p-2 text-light text-decoration-none">
          kintai
        </Link>
        <Link
          href="/employee/sessions"
          className="p-2 ms-auto text-light text-decoration-none"
        >
          管理者ログイン
        </Link>
        <Link
          href="/admin/sessions"
          className="me-2 p-2 text-light text-decoration-none"
        >
          従業員ログイン
        </Link>
      </Stack>
    </header>
  );
}
