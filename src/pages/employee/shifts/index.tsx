import EmployeeHeader from "@/components/EmployeeHeader";
import MyHead from "@/components/MyHead";
import Calendar from "@/components/Calendar";

// TODO : カレンダー表示内容を取得
const rows = [
  {
    title: "シフト申請",
    start: new Date("8 20, 2023 0:00:00"),
    end: new Date("8 20, 2023 5:00:00"),
    description: "シフト詳細",
    backgroundColor: "blue",
    borderColor: "blue",
  },
  {
    title: "欠勤申請",
    start: new Date("8 25, 2023 2:00:00"),
    end: new Date("8 25, 2023 4:00:00"),
    description: "シフト申請",
    backgroundColor: "red",
    borderColor: "red",
  },
  {
    title: "確定",
    start: new Date("8 24, 2023 3:00:00"),
    end: new Date("8 24, 2023 8:00:00"),
    description: "シフト申請",
    backgroundColor: "limegreen",
    borderColor: "limegreen",
  },
];

export default function EmployeeShifts() {
  return (
    <>
      <MyHead title="シフトカレンダー" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">シフトカレンダー</h2>
        <div className="mx-5">
          <Calendar rows={rows} />
        </div>
      </main>
    </>
  );
}
