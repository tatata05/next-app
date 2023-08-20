type DetailType = {
  detailLabel: string;
  detail?: string | number;
};

export default function ShowDetail({ detailLabel, detail }: DetailType) {
  return (
    <>
      <div className="d-flex col-8 mx-auto mt-4">
        <div className="col-6 text-center">{detailLabel}</div>
        <div className="col-6 text-start">{detail}</div>
      </div>
    </>
  );
}
