import RadioButton from "./RadioButton";

type FormArray = {
  action: string;
  submitLabel: string;
  rows: FormProps[];
};

type FormProps = {
  nameLabel: string;
  type: string;
  warningLabel?: string;
};

export default function From({ action, submitLabel, rows }: FormArray) {
  return (
    <form action={action} method="post">
      {rows.map((row, index) => (
        <div className="col-3 mx-auto mt-3" key={index}>
          <label className="form-label">{row.nameLabel}</label>
          {row.type === "radio" ? (
            <RadioButton />
          ) : (
            <>
              <input type={row.type} className="form-control" />
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
  );
}
