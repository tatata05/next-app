import ShowDetail from "./ShowDetail";

type ShiftAbsenceArray = {
  rows: ShiftAbsenceProps[];
};

type ShiftAbsenceProps = {
  key: number;
  detailLabel: string;
  detail: string;
};

export default function ShiftAbsenceShow({ rows }: ShiftAbsenceArray) {
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
