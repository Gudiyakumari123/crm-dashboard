import React, { useState, Fragment, useEffect, useMemo } from "react";
// import "../../../../shared/style.scss";
import "./reseller.scss";

// Toasitify
import { ToastContainer, toast, cssTransition } from "react-toastify";

// Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Country State City
import { useFormik } from "formik";
import Select from "react-select";
import csc from "country-state-city";
import countryList from "react-select-country-list";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import Flag from "react-flagpack";

import { Form, Button } from "react-bootstrap";

import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck",
});

const ResellerRegistration = ({ initialValue }) => {
  const [phone, setPhone] = useState(initialValue);
  const [alterPh, setAlterPh] = useState(initialValue);
  const [startDate, setStartDate] = useState(new Date());

  // Form Validations

  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
  });

  const countries = csc.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));
  const updatedStates = (countryId) =>
    csc
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }));
  const updatedCities = (stateId) =>
    csc
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  useEffect(() => {}, [values]);

  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (country) => {
    setCountry(country);
  };
  function animateCss() {
    toast.dark("Hey 👋, Data Has Been Saved!", {
      transition: bounce,
    });
  }

  // function animista() {
  //   toast.dark("Hey 👋, see how easy!", {
  //     transition: swirl,
  //   });
  // }

  return (
    <Fragment>
      <Header />
      <SubHeader />
      <div className="reg__form__container">
        <div className="rf__content">
          <div className="rf__wrapper">
            <div className="title"> Re- Seller Registration Form </div>
            <div className="form__items">
              <Form className="hor__form" onSubmit={handleSubmit}>
                <div>
                  {/* <Form.Group
                    className="mb-3 display"
                    controlId="formBasicEmail"
                  >
                    <Form.Label> Date of Join </Form.Label>
                    <DatePicker
                      className="date-picker"
                      selected={startDate}
                      onChange={(date: Date) => setStartDate(date)}
                    />
                  </Form.Group> */}

                  <div className="form-group display mb-3">
                    <label htmlFor="exampleFormControlSelect1 form-label">
                      Category
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      placeholder="Default"
                    >
                      <option> Company </option>
                      <option> Individual </option>
                    </select>
                  </div>

                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      placeholder="Enter company name"
                      // onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Contact Person </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter contact person"
                      name="contactPerson"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Nature of Business </Form.Label>
                    <Form.Control
                      type="text"
                      name="natureOfBusiness"
                      placeholder="Enter Nature of Business"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Address </Form.Label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicEmail"
                  >
                    <Form.Label> Country </Form.Label>
                    <Select
                      id="country"
                      name="country"
                      label="country"
                      options={updatedCountries}
                      value={values.country}
                      onChange={(value) => {
                        setFieldValue("country", value);
                        setFieldValue("state", null);
                        setFieldValue("city", null);
                      }}
                    />
                  </Form.Group>

                  <div className="form-group display mb-3">
                    <label htmlFor="exampleFormControlSelect1 form-label">
                      State
                    </label>
                    <Select
                      id="state"
                      name="state"
                      options={updatedStates(
                        values.country ? values.country.value : null
                      )}
                      value={values.state}
                      onChange={(value) => {
                        setValues({ state: value, city: null }, false);
                      }}
                    />
                  </div>

                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label> City </Form.Label>
                    <Select
                      id="city"
                      name="city"
                      options={updatedCities(
                        values.state ? values.state.value : null
                      )}
                      value={values.city}
                      onChange={(value) => setFieldValue("city", value)}
                    />
                  </Form.Group>
                </div>
                <div>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>GSTIN /VAT No </Form.Label>
                    <Form.Control
                      type="text"
                      name="vatNo"
                      placeholder="Enter VAT No"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label> Phone Number </Form.Label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      name="contactPerson"
                      value={phone}
                      onChange={setPhone}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label> Alternate Contact </Form.Label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={alterPh}
                      onChange={setAlterPh}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Website </Form.Label>
                    <Form.Control
                      type="website"
                      name="website"
                      placeholder="URL Here..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Remarks by Reseller </Form.Label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Status </Form.Label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      placeholder="Default"
                    >
                      <option> Active </option>
                      <option> Inactive </option>
                    </select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 display"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Remarks by User </Form.Label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </Form.Group>
                </div>
              </Form>
              <div className="btn__holder">
                <Button
                  variant="primary"
                  className="btn-save"
                  onClick={animateCss}
                  id="animate.css"
                >
                  Save
                </Button>
                <Button className="btn-secondary"> Clear </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer transition={bounce} />
      <Footer />
    </Fragment>
  );
};

export default ResellerRegistration;
