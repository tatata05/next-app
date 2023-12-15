import Link from "next/link";
import Stack from "react-bootstrap/Stack";
import KintaiAdmin from "@/api/KintaiAdmin";
import { useEffect, useState } from "react";
import { GetAdmins200ResponseDataInner as CurrentAdmin } from "@/api/typescript-axios";

export default function AdminHeader() {
  const [currentAdmin, setCurrentAdmin] = useState<CurrentAdmin>();

  useEffect(() => {
    (async () => {
      const currentAdminRes = await KintaiAdmin.getCurrentAdmin();
      setCurrentAdmin(currentAdminRes.data.data);
    })();
  }, []);

  return (
    <header className="bg-dark">
      <Stack direction="horizontal" gap={3}>
        <Link
          href="/admin"
          className="ms-2 p-2 text-light text-decoration-none"
        >
          kintai
        </Link>
        <Link
          href={`/admin/admins/${currentAdmin?.id}`}
          className="mx-auto p-2 text-light text-decoration-none"
        >
          {currentAdmin?.name}
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
        <Link
          href="/admin/logout"
          className="me-2 p-2 text-light text-decoration-none"
        >
          ログアウト
        </Link>
      </Stack>
    </header>
  );
}
