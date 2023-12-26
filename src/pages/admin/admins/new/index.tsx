import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import KintaiAuth from "@/api/KintaiAuth";
import Router from "next/router";
import { errorHandler } from "@/utils/errorHandler";
import { useRouter } from "next/router";

const rows = [
  {
    nameLabel: "管理者名",
    type: "text",
    registerLabel: "name",
  },
  {
    nameLabel: "メールアドレス",
    type: "email",
    registerLabel: "email",
  },
  {
    nameLabel: "パスワード",
    type: "password",
    warningLabel: "6文字以上",
    registerLabel: "password",
  },
  {
    nameLabel: "パスワード(確認)",
    type: "password",
    warningLabel: "6文字以上",
    registerLabel: "passwordConfirmation",
  },
];

type DataProps = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};

export default function AdminAdminNew() {
  const router = useRouter();
  const [data, setData] = useState<DataProps>({});

  useEffect(() => {
    (async () => {
      if (
        data.name &&
        data.email &&
        data.password &&
        data.passwordConfirmation
      ) {
        try {
          await KintaiAuth.createAdmin(data);
          Router.push("/");
        } catch (error) {
          errorHandler(error, router);
        }
      }
    })();
  }, [data]);

  return (
    <>
      <MyHead title="管理者登録" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">管理者登録</h2>
        <Form
          action="/"
          submitLabel="管理者を登録する"
          rows={rows}
          setData={setData}
        />
      </main>
    </>
  );
}
