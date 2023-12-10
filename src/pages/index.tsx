// import KintaiEmployee from "@/api/KintaiEmployee";
import Header from "../components/Header";
import MyHead from "@/components/MyHead";
import KintaiAdmin from "@/api/KintaiAdmin";
// import Router from "next/router";
import { useEffect, useState } from "react";

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

  // const bbbb = async () => {
  //   try {
  //     const fuga = await KintaiEmployee.getCurrentEmployee();
  //     console.log(fuga.data);
  //   } catch (error: any) {
  //     if (error?.response.status === 401) {
  //       Router.push("/admin/sessions");
  //     }
  //     console.log(error);
  //   }
  // };
  // bbbb();

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
