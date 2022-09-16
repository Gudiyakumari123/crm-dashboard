import React from "react";
import Fade from "react-reveal/Fade";
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = ({
  label,
  value,
  type,
  name,
  placeholder,
  format,
  style,
  isError,
  onChange,
  errorMsg,
  defaultValue,
  moment,
  ...props
}) => {
  const dateFormat = "DD/MM/YYYY";

  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          {label}
          {isError ? <div className="require">{isError}</div> : null}
        </label>
        <DatePicker
          // defaultValue={moment("2022/06/01", dateFormat)}
          format={dateFormat}
          style={style}
          className="date-picker"
          placeholder={placeholder}
          onChange={onChange}
          required
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
export default ReactDatePicker;
