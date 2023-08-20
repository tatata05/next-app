import Link from "next/link";
import ShowDetail from "./ShowDetail";

type ShowType = {
  nameLabel: string;
  name: string;
  email: string;
  gender?: string;
  age?: number;
  address?: string;
  phone_number?: string;
  emergency_phone_number?: string;
  role?: string;
};

export default function Show({
  nameLabel,
  name,
  email,
  gender,
  age,
  address,
  phone_number,
  emergency_phone_number,
  role,
}: ShowType) {
  return (
    <div className="text-center">
      {/* TODO : データがなければこちらを表示
          <p>該当するユーザーは存在しません</p> */}
      <div className="row pb-5">
        <ShowDetail detailLabel={nameLabel} detail={name} />
        <ShowDetail detailLabel="メールアドレス" detail={email} />
        {(() => {
          if (role === "employee") {
            return (
              <>
                <ShowDetail detailLabel="性別" detail={gender} />
                <ShowDetail detailLabel="年齢" detail={age} />
                <ShowDetail detailLabel="住所" detail={address} />
                <ShowDetail detailLabel="電話番号" detail={phone_number} />
                <ShowDetail
                  detailLabel="緊急連絡先電話番号"
                  detail={emergency_phone_number}
                />
              </>
            );
          }
        })()}
      </div>
      {/* TODO : Linkの修正 */}
      <div className="d-flex justify-content-center col-8 mx-auto text-center">
        <div className="col-3">
          {/* TODO : Linkの修正 */}
          {/* TODO : current_userと一致or従業員詳細であれば表示 それ以外は非表示 */}
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
