import ShowDetail from "./ShowDetail";

type Rows = {
  rows: Row[];
};

type Row = {
  detailLabel: string;
  detail: string;
};

export default function ShiftAbsenceShow({ rows }: Rows) {
  return (
    <>
      <div className="row pb-5">
        {rows.map((row) => (
          <ShowDetail detailLabel={row.detailLabel} detail={row.detail} />
        ))}
      </div>
    </>
  );
}
