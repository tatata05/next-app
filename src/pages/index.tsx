import KintaiEmployee from "@/api/KintaiEmployee";
import Header from "../components/Header";
import MyHead from "@/components/MyHead";
import KintaiAdmin from "@/api/KintaiAdmin";
import Cookies from "js-cookie";

export default function Home() {
  // 共通で使用するものとしてどこかに置いておきたい
  const token: any = {
    headers: {
      "Content-Type": "application/json",
      uid: Cookies.get("uid"),
      client: Cookies.get("client"),
      "access-token": Cookies.get("access-token"),
    },
  };
  // TODO: そのうち削除する。レスポンスを適切に取得できているか確認のためにとりあえず記載。
  const aaaa = async () => {
    const hoge = await KintaiAdmin.getAdmin(1, token);
    console.log(hoge.data);
  };
  aaaa();

  const bbbb = async () => {
    const fuga = await KintaiEmployee.getCurrentEmployee();
    console.log(fuga.data);
  };
  bbbb();

  return (
    <>
      <MyHead />
      <Header />
      <main className="text-center">
        <h2 className="mt-5">ホーム</h2>
        <div>
          <div className="mt-3">従業員ログイン</div>
          <div className="mt-3">管理者ログイン</div>
        </div>
      </main>
    </>
  );
}
