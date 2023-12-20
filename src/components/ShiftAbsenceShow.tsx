import ShowDetail from "./ShowDetail";
import { GetAbsenceForAdmin200ResponseData as Absence } from "@/api/typescript-axios";

// TODO: shift 側を修正した時に、型も調整
type ShiftAbsenceProps = {
  fetchData?: Absence;
};

export default function ShiftAbsenceShow({ fetchData }: ShiftAbsenceProps) {
  const statusJa = {
    unapproved: "未承認",
    approved: "承認",
    rejected: "却下",
  };

  const rows = fetchData && [
    {
      detailLabel: "従業員名",
      detail: fetchData.employee.name,
    },
    {
      detailLabel: "開始時間",
      detail: fetchData.startTime.toLocaleString(),
    },
    {
      detailLabel: "終了時間",
      detail: fetchData.endTime.toLocaleString(),
    },
    {
      detailLabel: "承認状況",
      detail: statusJa[`${fetchData.status}`],
    },
  ];

  return (
    <div className="row pb-5">
      {rows?.map((row, index) => (
        <ShowDetail
          key={index}
          detailLabel={row.detailLabel}
          detail={row.detail}
        />
      ))}
    </div>
  );
}
