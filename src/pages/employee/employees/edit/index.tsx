import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Form from "@/components/From";

const rows = [
  {
    nameLabel: "従業員名",
    type: "text",
  },
  {
    nameLabel: "メールアドレス",
    type: "email",
  },
  {
    nameLabel: "性別",
    type: "radio",
  },
  {
    nameLabel: "年齢",
    type: "number",
  },
  {
    nameLabel: "住所",
    type: "text",
  },
  {
    nameLabel: "電話番号",
    type: "text",
  },
  {
    nameLabel: "緊急連絡先電話番号",
    type: "text",
  },
  {
    nameLabel: "新規パスワード",
    type: "password",
    warningLabel: "6文字以上・更新する場合のみ入力してください",
  },
  {
    nameLabel: "新規パスワード(確認)",
    type: "password",
    warningLabel: "6文字以上・更新する場合のみ入力してください",
  },
  {
    nameLabel: "現在のパスワード",
    type: "password",
    warningLabel: "6文字以上・必須入力",
  },
];

export default function EmployeeEmployeeEdit() {
  return (
    <>
      <MyHead title="アカウント編集" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">アカウント編集</h2>
        <Form action="/" submitLabel="編集を保存する" rows={rows} />
      </main>
    </>
  );
}
