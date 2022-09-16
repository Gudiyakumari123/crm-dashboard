import React from "react";
import "./style.scss";

const TextArea = ({
  label,
  value,
  name,
  row,
  placeholder,
  isError,
  onChange,
  ...props
}) => {
  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          {label}
        </label>
        <textarea
          value={value}
          rows={row}
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </div>
    </>
  );
};

export default TextArea;
