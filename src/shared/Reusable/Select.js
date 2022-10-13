import React from "react";

import Select from "react-select";

function ReactSelect({
  label,
  value,
  name,
  placeholder,
  isError,
  onChange,
  options,
  errorMsg,
  ...props
}) {
  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          {label}
          {isError ? <div className="require">{isError}</div> : null}
        </label>
        <Select
          value={value}
          // className="form-control"

          // className="select-form"
          // className="department"
          name={name}
          options={options}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </div>
    </>
  );
}

export default ReactSelect;
