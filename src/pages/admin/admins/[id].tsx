import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Show from "@/components/Show";

const rows = [
  {
    detailLabel: "管理者名",
    detail: "管理者1",
  },
  {
    detailLabel: "メールアドレス",
    detail: "example.gmail.com",
  },
];

export default function AdminAdminsShow() {
  return (
    <>
      <MyHead title="管理者詳細" />
      <AdminHeader />
      <main className="text-center">
        {/* TODO : 詳細がログインしているユーザーの場合はこちらを表示
        <h2 className="mt-5 mb-5">マイページ</h2> */}
        <h2 className="mt-5 mb-3">管理者詳細</h2>
        {/* TODO : nameとemailを取得してきて表示 */}
        <Show rows={rows} />
      </main>
    </>
  );
}
