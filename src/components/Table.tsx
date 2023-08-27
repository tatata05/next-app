type TableArray = {
  rows: TableProps[];
  nameLabel: string;
};

type TableProps = {
  key: number;
  name: string;
  email: string;
};

export default function Table({ rows, nameLabel }: TableArray) {
  return (
    <table className="table text-center w-75 mx-auto">
      <thead>
        <tr>
          <th>{nameLabel}</th>
          <th>メールアドレス</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key}>
            <td>{row.name}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
