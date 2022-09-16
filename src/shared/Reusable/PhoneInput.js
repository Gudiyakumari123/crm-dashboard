import React, { useState } from "react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function PhoneInputBox({
  phoneLabel,
  color,
  value,
  name,
  placeholder,
  isError,
  onChange,
  ...props
}) {
  const [phone, setPhone] = useState();
  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          {phoneLabel}
        </label>
        <PhoneInput
          value={phone}
          className="form-control"
          international
          name={name}
          defaultCountry="IN"
          placeholder={placeholder}
          onChange={setPhone}
          {...props}
        />
      </div>
    </>
  );
}

export default PhoneInputBox;
