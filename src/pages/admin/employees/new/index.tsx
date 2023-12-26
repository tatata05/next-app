import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Form from "@/components/Form";

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

export default function AdminEmployeeNew() {
  return (
    <>
      <MyHead title="従業員登録" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">従業員登録</h2>
        <Form action="/" submitLabel="従業員を登録する" rows={rows} />
      </main>
    </>
  );
}
