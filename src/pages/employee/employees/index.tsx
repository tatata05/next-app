import EmployeeHeader from "@/components/EmployeeHeader";
import MyHead from "@/components/MyHead";
import EmployeeShow from "@/components/UserShow";

export default function EmployeeEmplyeeShow() {
  return (
    <>
      <MyHead title="マイページ" />
      <EmployeeHeader />
      <main className="text-center">
        <h2 className="mt-5 mb-3">マイページ</h2>
        {/* TODO : nameとemailを取得してきて表示 */}
        <EmployeeShow
          nameLabel="従業員名"
          name="従業員 is Me"
          email="example@gmail.com"
          gender="男"
          age={25}
          address="東京都千代田区丸の内1-1"
          phone_number="080-1111-2222"
          emergency_phone_number="080-3333-4444"
          role="employee"
        />
      </main>
    </>
  );
}
