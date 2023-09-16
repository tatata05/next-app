export default function RadioButton() {
  return (
    <div>
      <label className="form-check-label ms-1 me-2">
        <input className="form-check-input" type="radio" name="gender" />男
      </label>
      <label className="form-check-label ms-1 me-2">
        <input className="form-check-input" type="radio" name="gender" />女
      </label>
      <label className="form-check-label ms-1 me-2">
        <input className="form-check-input" type="radio" name="gender" />
        その他
      </label>
    </div>
  );
}
