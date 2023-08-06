import Header from "../components/Header";
import MyHead from "@/components/MyHead";

export default function Home() {
  return (
    <>
      <MyHead />
      <Header />
      <main className="text-center">
        <h2>ホーム</h2>
        <div>
          <div>従業員ログイン</div>
          <div>管理者ログイン</div>
        </div>
      </main>
    </>
  );
}
