import Head from "next/head";
import Stack from "react-bootstrap/Stack";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="bg-dark">
        <Stack direction="horizontal" gap={3}>
          <div className="p-2 text-light">kintai</div>
          <div className="p-2 ms-auto text-light">従業員ログイン</div>
          <div className="p-2 text-light">管理者ログイン</div>
        </Stack>
      </header>
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
