import Header from "@/components/Header";
import MyHead from "@/components/MyHead";
import Link from "next/link";
import Form from "@/components/From";

const rows = [
  {
    nameLabel: "メールアドレス",
    type: "email",
    registerLabel: "email",
  },
  {
    nameLabel: "パスワード",
    type: "password",
    registerLabel: "password",
  },
];

export default function AdminSessions() {
  return (
    <>
      <MyHead title="管理者ログイン" />
      <Header />
      <main className="text-center">
        <h2 className="mt-5 mb-3">管理者ログイン</h2>
        <Form action="/" submitLabel="管理者としてログインする" rows={rows} />
        <div className="mt-3">
          {/* TODO : 遷移先調整 */}
          <Link href="/">ゲスト管理者ログイン</Link>
        </div>
      </main>
    </>
  );
}
