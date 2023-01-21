import { useState } from "react";

function MyInput({ label, name, type, hint, onChange }) {
  const [error, setErorr] = useState("");

  const _onChange = (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length < 8 && e.target.name === "password") {
      setErorr("Please set longer password");
      return;
    } else {
      setErorr("");
    }

    onChange(e);
  };
  return (
    <div className="input">
      <label htmlFor={name}>
        {label}
        <input name={name} type={type} onChange={_onChange} />
      </label>
      {hint && <span>{hint}</span>}
      <p>{error}</p>
    </div>
  );
}
export default MyInput;
