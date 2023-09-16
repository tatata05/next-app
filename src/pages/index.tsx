import Header from "../components/Header";
import MyHead from "@/components/MyHead";

export default function Home() {
  return (
    <>
      <MyHead />
      <Header />
      <main className="text-center">
        <h2 className="mt-5">ホーム</h2>
        <div>
          <div className="mt-3">従業員ログインテスト</div>
          <div className="mt-3">管理者ログイン</div>
        </div>
      </main>
    </>
  );
}
