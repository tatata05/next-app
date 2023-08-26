import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Link from "next/link";

export default function AdminAdminsNew() {
  return (
    <>
      <MyHead title="管理者ログイン" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">管理者ログイン</h2>
        <form action="/" method="post">
          <div className="col-3 mx-auto mt-3">
            <label className="form-label">メールアドレス</label>
            <input type="email" className="form-control"></input>
          </div>
          <div className="col-3 mx-auto mt-3">
            <label className="form-label">パスワード</label>
            <input type="password" className="form-control"></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-4">
              管理者を登録する
            </button>
          </div>
        </form>
        <div className="mt-3">
          {/* TODO : 遷移先調整 */}
          <Link href="/">ゲスト管理者ログイン</Link>
        </div>
      </main>
    </>
  );
}
