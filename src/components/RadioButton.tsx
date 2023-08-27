export default function RadioButton() {
  return (
    <div>
      <input className="form-check-input" type="radio" name="gender" />
      <label className="form-check-label ms-1 me-2">男</label>
      <input className="form-check-input" type="radio" name="gender" />
      <label className="form-check-label ms-1 me-2">女</label>
      <input className="form-check-input" type="radio" name="gender" />
      <label className="form-check-label ms-1 me-2">その他</label>
    </div>
  );
}
