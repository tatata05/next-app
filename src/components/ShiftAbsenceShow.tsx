import ShowDetail from "./ShowDetail";

type Rows = {
  rows: Row[];
};

type Row = {
  key: number;
  detailLabel: string;
  detail: string;
};

export default function ShiftAbsenceShow({ rows }: Rows) {
  return (
    <div className="row pb-5">
      {rows.map((row) => (
        <ShowDetail
          key={row.key}
          detailLabel={row.detailLabel}
          detail={row.detail}
        />
      ))}
    </div>
  );
}
