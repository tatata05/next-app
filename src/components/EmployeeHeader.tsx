import Stack from "react-bootstrap/Stack";

export default function AdminHeader() {
  return (
    <header className="bg-dark">
      <Stack direction="horizontal" gap={3}>
        <div className="p-2 text-light">kintai</div>
        <div className="p-2 ms-auto text-light">シフトカレンダー</div>
        <div className="p-2 text-light">シフト申請</div>
        <div className="p-2 text-light">欠勤申請</div>
        <div className="p-2 text-light">通知一覧</div>
        <div className="p-2 text-light">ログアウト</div>
      </Stack>
    </header>
  );
}
