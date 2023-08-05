import Stack from "react-bootstrap/Stack";

export default function Header() {
  return (
    <header className="bg-dark">
      <Stack direction="horizontal" gap={3}>
        <div className="p-2 text-light">kintai</div>
        <div className="p-2 ms-auto text-light">従業員ログイン</div>
        <div className="p-2 text-light">管理者ログイン</div>
      </Stack>
    </header>
  );
}
