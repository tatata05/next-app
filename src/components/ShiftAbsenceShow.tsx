import ShowDetail from "./ShowDetail";
import { GetAbsenceForAdmin200ResponseData as Absence } from "@/api/typescript-axios";

// TODO: shift 側を修正した時に、型も調整
type ShiftAbsenceProps = {
  absence?: Absence;
};

export default function ShiftAbsenceShow({ absence }: ShiftAbsenceProps) {
  const statusJa = {
    unapproved: "未承認",
    approved: "承認",
    rejected: "却下",
  };

  const rows = absence && [
    {
      detailLabel: "従業員名",
      detail: absence.employee.name,
    },
    {
      detailLabel: "開始時間",
      detail: absence.startTime.toLocaleString(),
    },
    {
      detailLabel: "終了時間",
      detail: absence.endTime.toLocaleString(),
    },
    {
      detailLabel: "承認状況",
      detail: statusJa[`${absence.status}`],
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
