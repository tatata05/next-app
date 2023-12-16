import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Calendar from "@/components/Calendar";
import { useEffect, useState } from "react";
import KintaiAdmin from "@/api/KintaiAdmin";
import {
  GetShiftsForAdmin200ResponseDataInner as Shifts,
  GetUnappliedEmployees200ResponseDataInner as UnappliedEmployees,
} from "@/api/typescript-axios";
import Link from "next/link";

export default function AdminShifts() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [shifts, setShifts] = useState<Shifts[]>([]);
  const [unappliedEmployees, setUnappliedEmployees] =
    useState<UnappliedEmployees[]>();

  useEffect(() => {
    (async () => {
      const shiftsRes = await KintaiAdmin.getShiftsForAdmin();
      setShifts(shiftsRes.data.data);
      const unappliedEmployeesRes = await KintaiAdmin.getUnappliedEmployees();
      setUnappliedEmployees(unappliedEmployeesRes.data.data);
      setLoading(false);
    })();
  }, []);

  const shiftRows = shifts.map((shift) => ({
    title: shift.absenceId ? "シフト" : "欠勤",
    start: new Date(shift.startTime),
    end: new Date(shift.endTime),
    description: shift.absenceId ? "シフト詳細" : "欠勤詳細",
    backgroundColor: shift.absenceId ? "blue" : "red",
    borderColor: shift.absenceId ? "blue" : "red",
  }));

  return (
    <>
      <MyHead title="シフト覧一覧" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5">シフト一覧</h2>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <div className="relative">
            {unappliedEmployees && (
              <div className="">
                <div className="w-25 me-auto">未申請従業員</div>
                {unappliedEmployees?.map((unappliedEmployee) => (
                  <div
                    key={unappliedEmployee.id}
                    className="w-25 me-auto mt-1 mb-3"
                  >
                    <Link href={`/admin/employees/${unappliedEmployee.id}`}>
                      {unappliedEmployee.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <div className="mx-5">
              <Calendar rows={shiftRows} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
