import MyHead from "@/components/MyHead";
import AdminHeader from "@/components/AdminHeader";

export default function AdminHome() {
  return (
    <>
      <MyHead />
      <AdminHeader />
      <main className="text-center">
        <h2 className="mt-5">ホーム</h2>
        <div>
          <div className="mt-5">シフトカレンダー</div>
          <div className="mt-3">管理者一覧</div>
          <div className="mt-3">従業員一覧</div>
          <div className="mt-3">通知一覧</div>
        </div>
      </main>
    </>
  );
}
