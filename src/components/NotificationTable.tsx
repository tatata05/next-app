import NotificationDetail from "./NotificationDetail";

type NotificationProps = {
  rows: RowType[];
};

type RowType = {
  isRead: boolean;
  kind: "application" | "approval_pending" | "unapplied";
  shiftId?: number;
};

export default function NotificationTable({ rows }: NotificationProps) {
  return (
    <table className="table text-cente w-75 mx-auto">
      <thead>
        <tr>
          <th>状態</th>
          <th>内容</th>
          <th>詳細</th>
        </tr>
      </thead>
      <tbody>
        {/* TODO: 仮でindexをkeyにしているが、indexの使用は非推奨のため、取得データのIDを利用する */}
        {rows.map((row, index) => (
          <NotificationDetail
            key={index}
            isRead={row.isRead}
            kind={row.kind}
            shiftId={row.shiftId}
          />
        ))}
      </tbody>
    </table>
  );
}
