type TableProps = {
  rows: RowType[];
  nameLabel: string;
};

type RowType = {
  name: string;
  email: string;
};

export default function Table({ rows, nameLabel }: TableProps) {
  return (
    <table className="table text-center w-75 mx-auto">
      <thead>
        <tr>
          <th>{nameLabel}</th>
          <th>メールアドレス</th>
        </tr>
      </thead>
      <tbody>
        {/* TODO: 仮でindexをkeyにしているが、indexの使用は非推奨のため、取得データのIDを利用する */}
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
