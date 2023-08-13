type TableArray = {
  rows: rows[];
  columns: columns[];
};

type rows = {
  key?: number;
  name?: string;
  email?: string;
};

type columns = {
  key: string;
  label: string;
};

export default function Table({ rows, columns }: TableArray) {
  return (
    <table className="table text-center w-75 mx-auto">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
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
