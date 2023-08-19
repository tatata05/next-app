import Link from "next/link";

type NotificationArray = {
  rows: rows[];
};

type rows = {
  key: number;
  read: boolean;
  kind: string;
  shiftId?: number;
};

export default function NotificationTable({ rows }: NotificationArray) {
  return (
    <>
      <table className="table text-cente w-75 mx-auto">
        <thead>
          <tr>
            <th>状態</th>
            <th>内容</th>
            <th>詳細</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) =>
            (() => {
              const checkShift = row.shiftId ? "シフト" : "欠勤";
              const checkRead = row.read ? "既読" : "未読";
              // TODO : 仮で表示、shiftから開始時刻をとってくる
              const dateTime = "1998/05/17 18:00~";
              switch (row.kind) {
                case "application":
                  return (
                    <tr key={row.key}>
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
                    <tr key={row.key}>
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
                    <tr key={row.key}>
                      <td>{checkRead}</td>
                      <td>
                        <Link href="/">シフト未申請</Link>
                      </td>
                      <td>
                        シフトを申請しておりません。早急に申請してください。
                      </td>
                    </tr>
                  );
              }
            })(),
          )}
        </tbody>
      </table>
    </>
  );
}
