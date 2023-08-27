import AdminHeader from "@/components/AdminHeader";
import MyHead from "@/components/MyHead";
import UserShow from "@/components/UserShow";

const rows = [
  {
    key: 1,
    detailLabel: "従業員名",
    detail: "従業員1",
  },
  {
    key: 2,
    detailLabel: "メールアドレス",
    detail: "example.gmail.com",
  },
  {
    key: 3,
    detailLabel: "性別",
    detail: "男",
  },
  {
    key: 4,
    detailLabel: "年齢",
    detail: 25,
  },
  {
    key: 5,
    detailLabel: "住所",
    detail: "東京都千代田区丸の内1-1",
  },
  {
    key: 6,
    detailLabel: "電話番号",
    detail: "080-1111-2222",
  },
  {
    key: 7,
    detailLabel: "緊急連絡先電話番号",
    detail: "080-3333-4444",
  },
];

export default function AdminEmployeeShow() {
  return (
    <>
      <MyHead title="従業員詳細" />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">従業員詳細</h2>
        {/* TODO : nameとemailを取得してきて表示 */}
        <UserShow rows={rows} />
      </main>
    </>
  );
}
