import KintaiAuth from "@/api/KintaiAuth";
import RadioButton from "./RadioButton";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

type FormArray = {
  action: string;
  submitLabel: string;
  rows: FormProps[];
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
};

export default function From({ action, submitLabel, rows }: FormArray) {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data: DataProps) => {
    try {
      const res = await KintaiAuth.signInAdmin(data);
      Cookies.set("access-token", res.headers["access-token"]);
      Cookies.set("client", res.headers["client"]);
      Cookies.set("uid", res.headers["uid"]);
    } catch (error) {
      console.log(error);
    }
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
