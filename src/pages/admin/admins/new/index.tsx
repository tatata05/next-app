import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Form from "@/components/Form";

const rows = [
  {
    nameLabel: "管理者名",
    type: "text",
  },
  {
    nameLabel: "メールアドレス",
    type: "email",
  },
  {
    nameLabel: "パスワード",
    type: "password",
    warningLabel: "6文字以上",
  },
  {
    nameLabel: "パスワード(確認)",
    type: "password",
    warningLabel: "6文字以上",
  },
];

export default function AdminAdminNew() {
  return (
    <>
      <MyHead title="管理者登録" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">管理登録</h2>
        <Form action="/" submitLabel="管理者を登録する" rows={rows} />
      </main>
    </>
  );
}
