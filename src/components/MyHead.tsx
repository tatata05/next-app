import Head from "next/head";

interface MyHeadProps {
  title?: string;
  description?: string;
}

const MyHead = ({ title, description = "勤怠管理アプリ" }: MyHeadProps) => {
  const siteName = "Kintai";
  if (title === undefined) {
    title = siteName;
  } else {
    title = `${title} | ${siteName}`;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MyHead;

// export default function MyHead() {
//   return (
//     <Head>
//       <title>Create Next App</title>
//       <meta name="description" content="Generated by create next app" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//     </Head>
//   );
// }
