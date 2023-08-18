import MyHead from "@/components/MyHead";
import AdminHeader from "@/components/AdminHeader";
import TableComponent from "@/components/Table";

// TODO : 仮のデータ、バックエンド側からデータを取得したい
const rows = [
  {
    key: 1,
    name: "テスト1",
    email: "example1@gmail.com",
  },
  {
    key: 2,
    name: "テスト2",
    email: "example2@gmail.com",
  },
  {
    key: 3,
    name: "テスト3",
    email: "example3@gmail.com",
  },
  {
    key: 4,
    name: "テスト4",
    email: "example4@gmail.com",
  },
];

export default function AdminAdmins() {
  return (
    <>
      <MyHead title="管理者一覧" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">管理者一覧</h2>
        <TableComponent rows={rows} nameLabel="管理者名" />
      </main>
    </>
  );
}
