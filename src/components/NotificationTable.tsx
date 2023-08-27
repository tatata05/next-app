import NotificationDetail from "./NotificationDetail";

type NotificationArray = {
  rows: NotificationProps[];
};

type NotificationProps = {
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
          {rows.map((row) => (
            <NotificationDetail
              key={row.key}
              read={row.read}
              kind={row.kind}
              shiftId={row.shiftId}
            ></NotificationDetail>
          ))}
        </tbody>
      </table>
    </>
  );
}
