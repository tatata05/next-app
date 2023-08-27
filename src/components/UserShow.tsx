import Link from "next/link";
import ShowDetail from "./ShowDetail";

type ShowArray = {
  rows: ShowProps[];
};

type ShowProps = {
  key: number;
  detailLabel: string;
  detail?: string | number;
};

export default function UserShow({ rows }: ShowArray) {
  return (
    <div className="text-center">
      {/* TODO : データがなければこちらを表示
          <p>該当するユーザーは存在しません</p> */}
      <div className="row pb-5">
        {rows.map((row) => (
          <ShowDetail
            key={row.key}
            detailLabel={row.detailLabel}
            detail={row.detail}
          />
        ))}
      </div>
      {/* TODO : Linkの修正 */}
      <div className="d-flex justify-content-center col-8 mx-auto text-center">
        <div className="col-3">
          {/* TODO : Linkの修正 */}
          {/* TODO : current_userと一致orAdminかつ従業員詳細であれば表示 それ以外は非表示 */}
          <Link href="/" className="btn btn-primary">
            編集
          </Link>
        </div>
        <div className="col-4">
          {/* TODO : Linkの修正  (data: {confirm: "本当に削除してよろしいですか？"}) */}
          <Link href="/" className="btn btn-primary">
            削除
          </Link>
        </div>
      </div>
    </div>
  );
}
