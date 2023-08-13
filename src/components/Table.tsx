type TableArray = {
  rows: rows[];
  label: string;
};

type rows = {
  key?: number;
  name?: string;
  email?: string;
};

export default function Table({ rows, label }: TableArray) {
  return (
    <table className="table text-center w-75 mx-auto">
      <thead>
        <tr>
          <th>{label}</th>
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
