import EmployeeHeader from "@/components/EmployeeHeader";
import MyHead from "@/components/MyHead";
import UserShow from "@/components/UserShow";

const rows = [
  {
    detailLabel: "従業員名",
    detail: "I am 従業員",
  },
  {
    detailLabel: "メールアドレス",
    detail: "example.gmail.com",
  },
  {
    detailLabel: "性別",
    detail: "男",
  },
  {
    detailLabel: "年齢",
    detail: 25,
  },
  {
    detailLabel: "住所",
    detail: "東京都千代田区丸の内1-1",
  },
  {
    detailLabel: "電話番号",
    detail: "080-1111-2222",
  },
  {
    detailLabel: "緊急連絡先電話番号",
    detail: "080-3333-4444",
  },
];

export default function EmployeeEmplyees() {
  return (
    <>
      <MyHead title="マイページ" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">マイページ</h2>
        {/* TODO : nameとemailを取得してきて表示 */}
        <UserShow rows={rows} />
      </main>
    </>
  );
}
