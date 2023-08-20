import Link from "next/link";
import ShowDetail from "./ShowDetail";

type ShowType = {
  name: string;
  startTime: string;
  endTime: string;
  status: string;
  link: string;
};

export default function ShiftAbsenceShow({
  name,
  startTime,
  endTime,
  status,
  link,
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
      {/* TODO : 未承認であれば以下を表示 */}
      <div className="d-flex justify-content-center col-8 mx-auto text-center">
        <div className="col-3">
          {/* TODO : Link先の調整、statusを変更できるように (admin_shift_path(shift: {status: "approved"}) */}
          <Link href={link} className="btn btn-primary">
            承認
          </Link>
        </div>
        <div className="col-4">
          {/* TODO : Link先の調整、satusを変更できるように confirmも出力 (admin_shift_path(shift: {status: "rejected"})) ({confirm: "本当に却下してよろしいですか？"}) */}
          <Link href={link} className="btn btn-primary">
            却下
          </Link>
        </div>
      </div>
    </>
  );
}
