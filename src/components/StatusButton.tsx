import Link from "next/link";

type StatusType = {
  link: string;
  statusLabel: string;
};

export default function StatusButton({ link, statusLabel }: StatusType) {
  return (
    <div className="col-3">
      {/* TODO : Link先の調整、statusを変更できるように (例：admin_shift_path(shift: {status: "approved"}) */}
      <Link href={link} className="btn btn-primary">
        {statusLabel}
      </Link>
    </div>
  );
}
