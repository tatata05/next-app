import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Link from "next/link";

export default function AdminAdminsShow() {
  return (
    <>
      <MyHead title="従業員詳細" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-5">従業員詳細</h2>
        <div className="text-center">
          {/* TODO : データがなければこちらを表示
          <p>該当する従業員は存在しません</p> */}
          <div className="row pb-5">
            <div className="container py-3"></div>
            <div className="d-flex col-8 mx-auto">
              <div className="col-6 text-center">従業員名</div>
              <div className="col-6 text-start">テスト従業員</div>
            </div>
            <div className="container py-3"></div>
            <div className="d-flex col-8 mx-auto">
              <div className="col-6 text-center">メールアドレス</div>
              <div className="col-6 text-start">example@gmail.com</div>
            </div>
          </div>
          {/* TODO : Linkの修正 */}
          <Link href="/" className="btn btn-primary">
            削除
          </Link>
        </div>
      </main>
    </>
  );
}
