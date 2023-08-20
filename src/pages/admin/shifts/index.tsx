import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Calender from "@/components/Calender";

// TODO : カレンダー表示内容を取得
const rows = [
  {
    key: 1,
    title: "シフト",
    start: new Date("8 20, 2023 0:00:00"),
    end: new Date("8 20, 2023 5:00:00"),
    description: "シフト詳細",
    backgroundColor: "blue",
    borderColor: "blue",
  },
  {
    key: 2,
    title: "シフト申請",
    start: new Date("8 25, 2023 2:00:00"),
    end: new Date("8 25, 2023 4:00:00"),
    description: "シフト申請",
    backgroundColor: "blue",
    borderColor: "blue",
  },
];

export default function AdminShifts() {
  return (
    <>
      <MyHead title="シフト覧一覧" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">シフト一覧</h2>
        <div className="mx-5">
          <Calender rows={rows} />
        </div>
      </main>
    </>
  );
}
