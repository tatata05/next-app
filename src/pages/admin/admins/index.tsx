import MyHead from "@/components/MyHead";
import AdminHeader from "@/components/AdminHeader";
import Table from "@/components/Table";

// TODO : 仮のデータ、バックエンド側からデータを取得したい
const rows = [
  {
    name: "テスト1",
    email: "example1@gmail.com",
  },
  {
    name: "テスト2",
    email: "example2@gmail.com",
  },
  {
    name: "テスト3",
    email: "example3@gmail.com",
  },
  {
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
        <Table rows={rows} nameLabel="管理者名" />
      </main>
    </>
  );
}
