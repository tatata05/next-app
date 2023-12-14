import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Calendar from "@/components/Calendar";
import { useEffect, useState } from "react";
import KintaiAdmin from "@/api/KintaiAdmin";
import { GetShiftsForAdmin200ResponseDataInner as Shifts } from "@/api/typescript-axios";

type ShiftProps = {
  rows: RowType[];
};

type RowType = {
  title: string;
  start: Date;
  end: Date;
  description: string;
  backgroundColor: string;
  borderColor: string;
};

export default function AdminShifts() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [shifts, setShifts] = useState<Shifts[]>([]);
  const [rows, setRows] = useState<ShiftProps>();

  useEffect(() => {
    (async () => {
      const shiftsRes = await KintaiAdmin.getShiftsForAdmin();
      setShifts(shiftsRes.data.data);
    })();
  }, []);

  useEffect(() => {
    const shift_rows: ShiftProps = [];
    shifts.map((shift) =>
      shift_rows.push({
        title: shift.absenceId ? "シフト" : "欠勤",
        start: new Date(shift.startTime),
        end: new Date(shift.endTime),
        description: shift.absenceId ? "シフト詳細" : "欠勤詳細",
        backgroundColor: shift.absenceId ? "blue" : "red",
        borderColor: shift.absenceId ? "blue" : "red",
      }),
    );
    setRows(shift_rows);
    setLoading(false);
  }, [shifts]);

  return (
    <>
      <MyHead title="シフト覧一覧" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">シフト一覧</h2>
        {/* TODO : シフト未申請従業員がいればここに表示 */}
        <div className="mx-5">
          {isLoading ? <>Loading...</> : <Calendar rows={rows} />}
        </div>
      </main>
    </>
  );
}
