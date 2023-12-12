import Link from "next/link";
import Stack from "react-bootstrap/Stack";
import KintaiEmployee from "@/api/KintaiEmployee";
import { useEffect, useState } from "react";
import { GetUnappliedEmployees200ResponseDataInner } from "@/api/typescript-axios";

export default function EmployeeHeader() {
  const [currentEmployee, setCurrentEmployee] =
    useState<GetUnappliedEmployees200ResponseDataInner>();

  useEffect(() => {
    (async () => {
      const currentEmployeeRes = await KintaiEmployee.getCurrentEmployee();
      setCurrentEmployee(currentEmployeeRes.data.data);
    })();
  }, []);

  return (
    <header className="bg-dark">
      <Stack direction="horizontal" gap={3}>
        <Link
          href="/employee"
          className="ms-2 p-2 text-light text-decoration-none"
        >
          kintai
        </Link>
        <Link
          href="/employee/mypage"
          className="mx-auto p-2 text-light text-decoration-none"
        >
          {currentEmployee?.name}
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
        <Link
          href="/employee/logout"
          className="me-2 p-2 text-light text-decoration-none"
        >
          ログアウト
        </Link>
      </Stack>
    </header>
  );
}
