import Link from "next/link";

type NotificationProps = {
  key: number;
  read: boolean;
  kind: string;
  shiftId?: number;
};

export default function NotificationDetail({
  key,
  read,
  kind,
  shiftId,
}: NotificationProps) {
  const checkShift = shiftId ? "シフト" : "欠勤";
  const checkRead = read ? "既読" : "未読";
  // TODO : 仮で表示、shiftから開始時刻をとってくる
  const dateTime = "1998/05/17 18:00~";
  switch (kind) {
    case "application":
      return (
        <tr key={key}>
          <td>{checkRead}</td>
          {/* TODO : typeカラムの内容によって表示の変更 */}
          <td>
            <Link href="/">{checkShift}承認</Link>
          </td>
          <td>
            {checkShift}が承認されました。({dateTime})
          </td>
        </tr>
      );
    case "approval_pending":
      return (
        <tr key={key}>
          <td>{checkRead}</td>
          {/* TODO : typeカラムの内容によって表示の変更 */}
          <td>
            <Link href="/">{checkShift}却下</Link>
          </td>
          <td>
            {checkShift}が却下されました。({dateTime})
          </td>
        </tr>
      );
    case "unapplied":
      return (
        <tr key={key}>
          <td>{checkRead}</td>
          <td>
            <Link href="/">シフト未申請</Link>
          </td>
          <td>シフトを申請しておりません。早急に申請してください。</td>
        </tr>
      );
  }
}
