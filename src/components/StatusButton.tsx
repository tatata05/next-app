type StatusType = {
  changeStatus: () => Promise<void>;
  statusLabel: string;
};

export default function StatusButton({
  changeStatus,
  statusLabel,
}: StatusType) {
  return (
    <div className="col-3">
      <button onClick={changeStatus} className="btn btn-primary">
        {statusLabel}
      </button>
    </div>
  );
}
