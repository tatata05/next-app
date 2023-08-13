import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Link from "next/link";

export default function AdminAdminsShow() {
  return (
    <>
      <MyHead title="管理者詳細" />
      <AdminHeader />
      <main className="text-center">
        {/* TODO : 詳細がログインしているユーザーの場合はこちらを表示
        <h2 className="mt-5 mb-5">マイページ</h2> */}
        <h2 className="mt-5 mb-5">管理者詳細</h2>
        <div className="text-center">
          {/* TODO : データがなければこちらを表示
          <p>該当する管理者は存在しません</p> */}
          <div className="row pb-5">
            <div className="container py-3"></div>
            <div className="d-flex col-8 mx-auto">
              <div className="col-6 text-center">管理者名</div>
              <div className="col-6 text-start">テスト管理者</div>
            </div>
            <div className="container py-3"></div>
            <div className="d-flex col-8 mx-auto">
              <div className="col-6 text-center">メールアドレス</div>
              <div className="col-6 text-start">example@gmail.com</div>
            </div>
          </div>
          <div className="d-flex justify-content-center col-8 mx-auto text-center">
            <div className="col-3">
              {/* TODO : Linkの修正 */}
              <Link href="/" className="btn btn-primary">
                編集
              </Link>
            </div>
            <div className="col-4">
              {/* TODO : Linkの修正 */}
              <Link href="/" className="btn btn-primary">
                削除
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
