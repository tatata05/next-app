import ShowDetail from "./ShowDetail";

type ShiftAbsenceProps = {
  rows: RowType[];
};

type RowType = {
  detailLabel: string;
  detail: string;
};

export default function ShiftAbsenceShow({ rows }: ShiftAbsenceProps) {
  return (
    <div className="row pb-5">
      {rows.map((row, index) => (
        <ShowDetail
          key={index}
          detailLabel={row.detailLabel}
          detail={row.detail}
        />
      ))}
    </div>
  );
}
