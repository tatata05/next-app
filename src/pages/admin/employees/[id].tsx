import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Show from "@/components/Show";

export default function AdminAdminsShow() {
  return (
    <>
      <MyHead title="従業員詳細" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">従業員詳細</h2>
        {/* TODO : nameとemailを取得してきて表示 */}
        <Show nameLabel="従業員名" name="従業員1" email="example.gmail.com" />
      </main>
    </>
  );
}
