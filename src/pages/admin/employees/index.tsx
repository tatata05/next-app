import MyHead from "@/components/MyHead";
import AdminHeader from "@/components/AdminHeader";
import Table from "@/components/Table";

// TODO : 仮のデータ、バックエンド側からデータを取得したい
const rows = [
  {
    key: 1,
    name: "テスト従業員1",
    email: "example1@gmail.com",
  },
  {
    key: 2,
    name: "テスト従業員2",
    email: "example2@gmail.com",
  },
  {
    key: 3,
    name: "テスト従業員3",
    email: "example3@gmail.com",
  },
  {
    key: 4,
    name: "テスト従業員4",
    email: "example4@gmail.com",
  },
];

export default function AdminEmployees() {
  return (
    <>
      <MyHead title="従業員一覧" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">従業員一覧</h2>
        <Table rows={rows} nameLabel="従業員名" />
      </main>
    </>
  );
}
