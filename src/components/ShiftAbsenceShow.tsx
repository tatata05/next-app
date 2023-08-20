import ShowDetail from "./ShowDetail";

type ShowType = {
  name: string;
  startTime: string;
  endTime: string;
  status: string;
};

export default function ShiftAbsenceShow({
  name,
  startTime,
  endTime,
  status,
}: ShowType) {
  return (
    <>
      <div className="row pb-5">
        <ShowDetail detailLabel="従業員名" detail={name} />
        {/* TODO : 関連する従業員名を取得 (absence.shift.employee.name) */}
        <ShowDetail detailLabel="開始時間" detail={startTime} />
        {/* TODO : 終了時刻を取得 (absence.shift.end_time_ja) */}
        <ShowDetail detailLabel="終了時間" detail={endTime} />
        <ShowDetail detailLabel="承認状況" detail={status} />
      </div>
    </>
  );
}
