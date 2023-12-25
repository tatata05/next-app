import { Dispatch, SetStateAction } from "react";
import RadioButton from "./RadioButton";
import { useForm } from "react-hook-form";

type FormArray = {
  action: string;
  submitLabel: string;
  rows: FormProps[];
  setData?: Dispatch<SetStateAction<object>>;
};

type FormProps = {
  nameLabel: string;
  type: string;
  warningLabel?: string;
  registerLabel?: string;
};

type DataProps = {
  email?: string;
  password?: string;
  name?: string;
  passwordConfirmation?: string;
};

export default function Form({
  action,
  submitLabel,
  rows,
  setData,
}: FormArray) {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: DataProps) => {
    // typeエラーが出てしまうので、setData && としている。全てのページを修正できたら不必要になるはず
    setData && setData(data);
  };

  return (
    <form action={action} method="post" onSubmit={handleSubmit(onSubmit)}>
      {rows.map((row, index) => (
        <div className="col-3 mx-auto mt-3" key={index}>
          <label className="form-label">{row.nameLabel}</label>
          {row.type === "radio" ? (
            <RadioButton />
          ) : (
            <>
              <input
                type={row.type}
                className="form-control"
                {...register(`${row.registerLabel}`)}
              />
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
