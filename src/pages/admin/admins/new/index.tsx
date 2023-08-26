import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";

export default function AdminAdminsShow() {
  return (
    <>
      <MyHead title="管理者登録" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">管理登録</h2>
        <form action="/" method="post">
          <div className="col-3 mx-auto">
            <label className="form-label">管理者名</label>
            <input type="input" className="form-control"></input>
          </div>
          <div className="col-3 mx-auto mt-3">
            <label className="form-label">メールアドレス</label>
            <input type="email" className="form-control"></input>
          </div>
          <div className="col-3 mx-auto mt-3">
            <label className="form-label">パスワード</label>
            <input type="password" className="form-control"></input>
            <div id="passwordHelpBlock" className="form-text">
              6文字以上
            </div>
          </div>
          <div className="col-3 mx-auto mt-3">
            <label className="form-label">パスワード(確認)</label>
            <input type="password" className="form-control"></input>
            <div id="passwordHelpBlock" className="form-text">
              6文字以上
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-4">
              管理者を登録する
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
