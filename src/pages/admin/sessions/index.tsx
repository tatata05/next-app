import Header from "@/components/Header";
import MyHead from "@/components/MyHead";
import Link from "next/link";
import Form from "@/components/Form";
import Cookies from "js-cookie";
import Router from "next/router";
import KintaiAuth from "@/api/KintaiAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { errorHandler } from "@/utils/errorHandler";

const rows = [
  {
    nameLabel: "メールアドレス",
    type: "email",
    registerLabel: "email",
  },
  {
    nameLabel: "パスワード",
    type: "password",
    registerLabel: "password",
  },
];

type DataProps = {
  email?: string;
  password?: string;
};

export default function AdminSessions() {
  const router = useRouter();
  const [data, setData] = useState<DataProps>({});

  useEffect(() => {
    (async () => {
      if (data.email && data.password) {
        try {
          const res = await KintaiAuth.signInAdmin(data);
          Cookies.set("access-token", res.headers["access-token"]);
          Cookies.set("client", res.headers["client"]);
          Cookies.set("uid", res.headers["uid"]);
          Router.push("/");
        } catch (error) {
          errorHandler(error, router);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <MyHead title="管理者ログイン" />
      <Header />
      <main className="text-center">
        <h2 className="mt-5 mb-3">管理者ログイン</h2>
        <Form
          action="/admin"
          submitLabel="管理者としてログインする"
          rows={rows}
          setData={setData}
        />
        <div className="mt-3">
          {/* TODO : 遷移先調整 */}
          <Link href="/">ゲスト管理者ログイン</Link>
        </div>
      </main>
    </>
  );
}
