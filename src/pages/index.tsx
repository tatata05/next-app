import KintaiEmployee from "@/api/KintaiEmployee";
import Header from "../components/Header";
import MyHead from "@/components/MyHead";
import KintaiAdmin from "@/api/KintaiAdmin";

export default function Home() {
  // TODO: そのうち削除する。レスポンスの取得を適切に取れているか確認のためにとりあえず記載。

  // getCurrentAdmin などパラメータにidが含まれていない時にうまくいかない。調査中
  const aaaa = async () => {
    const hoge = await KintaiAdmin.getAdmin(1);
    console.log(hoge.data);
  };
  aaaa();

  const bbbb = async () => {
    const fuga = await KintaiEmployee.getShiftForEmployee(1);
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
