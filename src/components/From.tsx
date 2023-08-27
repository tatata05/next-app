import RadioButton from "./RadioButton";

type Rows = {
  action: string;
  submitLabel: string;
  rows: Row[];
};

type Row = {
  nameLabel: string;
  type: string;
  warningLabel?: string;
};

export default function From({ action, submitLabel, rows }: Rows) {
  return (
    <>
      <form action={action} method="post">
        {rows.map((row) => (
          <div className="col-3 mx-auto mt-3">
            <label className="form-label">{row.nameLabel}</label>
            {row.type === "radio" ? (
              <RadioButton />
            ) : (
              <>
                <input type={row.type} className="form-control"></input>
                <div className="form-text">{row.warningLabel}</div>
              </>
            )}
          </div>
        ))}
        <div>
          <button type="submit" className="btn btn-primary mt-4">
            {submitLabel}
          </button>
        </div>
      </form>
    </>
  );
}
