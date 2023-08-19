import Link from "next/link";

type ShowTypes = {
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
}: ShowTypes) {
  return (
    <div className="text-center">
      {/* TODO : データがなければこちらを表示
          <p>該当するユーザーは存在しません</p> */}
      <div className="row pb-5">
        <div className="container py-3"></div>
        <div className="d-flex col-8 mx-auto">
          <div className="col-6 text-center">{nameLabel}</div>
          <div className="col-6 text-start">{name}</div>
        </div>
        <div className="container py-3"></div>
        <div className="d-flex col-8 mx-auto">
          <div className="col-6 text-center">メールアドレス</div>
          <div className="col-6 text-start">{email}</div>
        </div>
        {(() => {
          if (role === "employee") {
            return (
              <>
                <div className="container py-3"></div>
                <div className="d-flex col-8 mx-auto">
                  <div className="col-6 text-center">性別</div>
                  <div className="col-6 text-start">{gender}</div>
                </div>
                <div className="container py-3"></div>
                <div className="d-flex col-8 mx-auto">
                  <div className="col-6 text-center">年齢</div>
                  <div className="col-6 text-start">{age}</div>
                </div>
                <div className="container py-3"></div>
                <div className="d-flex col-8 mx-auto">
                  <div className="col-6 text-center">住所</div>
                  <div className="col-6 text-start">{address}</div>
                </div>
                <div className="container py-3"></div>
                <div className="d-flex col-8 mx-auto">
                  <div className="col-6 text-center">電話番号</div>
                  <div className="col-6 text-start">{phone_number}</div>
                </div>
                <div className="container py-3"></div>
                <div className="d-flex col-8 mx-auto">
                  <div className="col-6 text-center">緊急連絡先電話番号</div>
                  <div className="col-6 text-start">
                    {emergency_phone_number}
                  </div>
                </div>
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
