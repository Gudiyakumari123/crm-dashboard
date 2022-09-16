import React from "react";
import "./style.scss";

import Fade from "react-reveal/Fade";

const Input = ({
  label,
  color,
  value,
  type,
  size,
  name,
  placeholder,
  isError,
  onChange,
  required,
  errorMsg,
  ...props
}) => {
  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          {label}
          {isError ? <div className="require">{isError}</div> : null}
        </label>
        <input
          value={value}
          className="form-control"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required
          {...props}
        />
      </div>
      {errorMsg ? (
        <>
          <Fade top>
            <div className="error-messages">
              <p className="validate">
                <i className="bx bx-info-circle"></i>
                {errorMsg}
              </p>
            </div>
          </Fade>
        </>
      ) : null}
    </>
  );
};

export default Input;
