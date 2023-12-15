import Header from "../components/Header";
import MyHead from "@/components/MyHead";
import KintaiAdmin from "@/api/KintaiAdmin";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  // TODO: そのうち削除する。レスポンスを適切に取得できているか確認のためにとりあえず記載。
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const hoge = await KintaiAdmin.getAdmin(1);
      setData(hoge.data.data?.name);
      setLoading(false);
    })();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <MyHead />
      <Header />
      <main className="text-center">
        <h2 className="mt-5">ホーム</h2>
        <div>
          <div className="mt-3">
            <Link
              href="/admin/sessions"
              className="text-black text-decoration-none"
            >
              従業員ログイン
            </Link>
          </div>
          <div className="mt-3">
            <Link
              href="/employee/sessions"
              className="mt-3 text-black text-decoration-none"
            >
              管理者ログイン
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
