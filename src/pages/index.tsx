import MyHead from "../components/_myHead";
import Header from "../components/_header";

export default function Home() {
  return (
    <>
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
