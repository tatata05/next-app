import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";

export default function AdminAdminsEdit() {
  return (
    <>
      <MyHead title="管理者編集" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">管理者編集</h2>
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
            <label className="form-label">新規パスワード</label>
            <input type="password" className="form-control"></input>
            <div id="passwordHelpBlock" className="form-text">
              6文字以上・更新する場合のみ入力してください
            </div>
          </div>
          <div className="col-3 mx-auto mt-3">
            <label className="form-label">新規パスワード(確認)</label>
            <input type="password" className="form-control"></input>
            <div id="passwordHelpBlock" className="form-text">
              6文字以上・更新する場合のみ入力してください
            </div>
          </div>
          <div className="col-3 mx-auto mt-3">
            <label className="form-label">現在のパスワード</label>
            <input type="password" className="form-control"></input>
            <div id="passwordHelpBlock" className="form-text">
              6文字以上・必須入力
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-4">
              編集を保存する
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
