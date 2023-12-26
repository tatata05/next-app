import Header from "@/components/Header";
import MyHead from "@/components/MyHead";
import Link from "next/link";
import Form from "@/components/Form";

const rows = [
  {
    nameLabel: "メールアドレス",
    type: "email",
  },
  {
    nameLabel: "パスワード",
    type: "password",
  },
];

export default function EmployeeSessions() {
  return (
    <>
      <MyHead title="従業員ログイン" />
      <Header />
      <main className="text-center">
        <h2 className="mt-5 mb-3">従業員ログイン</h2>
        <Form action="/" submitLabel="従業員としてログインする" rows={rows} />
        <div className="mt-3">
          {/* TODO : 遷移先調整 */}
          <Link href="/">ゲスト従業員ログイン</Link>
        </div>
      </main>
    </>
  );
}
