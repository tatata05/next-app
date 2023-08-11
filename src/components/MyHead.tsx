import Head from "next/head";

interface MyHeadProps {
  title?: string;
  description?: string;
}

const MyHead = ({ title, description = "勤怠管理アプリ" }: MyHeadProps) => {
  const siteName = "Kintai";
  const pageTitle = title === undefined ? siteName : `${title} | ${siteName}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MyHead;
