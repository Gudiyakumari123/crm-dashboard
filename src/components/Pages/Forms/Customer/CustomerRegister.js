import React, { useState, Fragment, useEffect } from "react";

import moment from "moment";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";

// Toasitify
import { ToastContainer, toast, cssTransition } from "react-toastify";

// Country State City
import { useFormik } from "formik";
import csc from "country-state-city";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// import Flag from "react-flagpack";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

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

const Status = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const CustomerRegister = ({ initialValue }) => {
  var CurrencyFormat = require("react-currency-format");
  const [phone, setPhone] = useState(initialValue);
  const [alterPh, setAlterPh] = useState(initialValue);
  const [startDate, setStartDate] = useState(new Date());

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [refOpt, setRefOpt] = useState(false);

  // Form Validations

  const [formValues, setFormValues] = useState({
    companyName: "",
    contactPerson: "",
    category: "",
    address: "",
    city: "",
    gstNo: "",
    phone: "",
    altPhone: "",
    email: "",
    remarksCustomer: "",
    remarksUser: "",
  });

  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

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

  const { values, setFieldValue, setValues } = addressFromik;

  useEffect(() => {
    // console.log("FormErros::", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Everything is Good. Form Submitted");
    } else {
      // alert("Please , Fill the all required Fields");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.companyName) {
      errors.companyName = "Enter Company Name";
    }
    if (!values.contactPerson) {
      errors.contactPerson = "Enter contactPerson";
    }
    if (!values.category) {
      errors.category = "Enter category";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    return errors;
  };

  function animateCss() {
    toast.dark("Hey 👋, Data Has Been Saved!", {
      transition: bounce,
    });
  }
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Fragment>
      <Header />
      <SubHeader />

      <div className="form-container">
        <div className="form-content">
          <Container>
            {/* <div className="title"> Install Entry </div> */}
            <Form onSubmit={handleSubmit}>
              <div className="title"> Customer Registration </div>
              <Row style={{ gap: "5%" }}>
                <Col>
                  <Row>
                    <Row>
                      <Input
                        label="Company"
                        type="text"
                        name="companyName"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.companyName}
                        isError
                        errorMsg={formErrors.companyName}
                      />
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "12px" }}
                        label="Contact"
                        type="text"
                        name="contactPerson"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.contactPerson}
                        isError
                        errorMsg={formErrors.contactPerson}
                      />
                    </Row>
                    <Row>
                      <Col>
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            Phone
                            <div className="require"></div>
                          </label>
                          <PhoneInput
                            style={{ marginLeft: "15px" }}
                            label="Phone"
                            name="mobileNumber"
                            international
                            defaultCountry="IN"
                            value={phone}
                            onChange={setPhone}
                          />
                        </div>
                      </Col>
                      <Col>
                        <Input
                          style={{ marginLeft: "10px" }}
                          label="AltCont."
                          type="number"
                          name="AltCont"
                          className="form-control"
                          onChange={formValues.AltCont}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "4px" }}
                        label="Category"
                        type="text"
                        name="category"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.category}
                        isError
                        errorMsg={formErrors.category}
                      />
                    </Row>
                    <Row>
                      <TextArea
                        style={{ marginLeft: "11px" }}
                        label="Address"
                        type="text"
                        rows="3"
                        className="form-control"
                        name="address"
                        onChange={handleChange}
                        value={formValues.address}
                      />
                    </Row>
                    <Row>
                      <Col>
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            Country
                            <div className="require"></div>
                          </label>
                          <Select
                            id="country"
                            name="country"
                            className="react-select "
                            options={updatedCountries}
                            value={values.country}
                            onChange={(value) => {
                              setFieldValue("country", value);
                              setFieldValue("state", null);
                              setFieldValue("city", null);
                            }}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            State
                            <div className="require"></div>
                          </label>
                          <Select
                            id="state"
                            name="state"
                            className="react-select"
                            options={updatedStates(
                              values.country ? values.country.value : null
                            )}
                            value={values.state}
                            onChange={(value) => {
                              setValues({ state: value, city: null }, false);
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "2px" }}
                        label="Area/City"
                        type="text"
                        name="city"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.city}
                        isError
                        errorMsg={formErrors.city}
                      />
                    </Row>
                  </Row>
                </Col>
                {/* Left Side End */}
                {/* Right Side Start */}
                <Col>
                  <Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "6px" }}
                        label="GST&nbsp;No."
                        type="text"
                        name="gstNo"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.gstNo.toUpperCase()}
                      />
                    </Row>

                    <Row>
                      <Input
                        style={{ marginLeft: "20px" }}
                        label="Email"
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.email.toLowerCase()}
                      />
                    </Row>
                    <Row>
                      <TextArea
                        label="Remarks"
                        row="3"
                        placeholder="Remarks by Customer"
                        name="remarksCustomer"
                        onChange={handleChange}
                        value={formValues.remarksCustomer}
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Status"
                        options={Status}
                        className="react-select status-select"
                        onChange={console.log}
                        defaultValue={Status[0]}
                      />
                    </Row>
                    <Row>
                      <TextArea
                        label="Remarks"
                        row="3"
                        placeholder="Remarks by User"
                        name="remarksUser"
                        onChange={handleChange}
                        value={formValues.remarksUser}
                      />
                    </Row>
                  </Row>
                </Col>
              </Row>
              <div className="btn__holder">
                <Button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  id="animate.css"
                >
                  Save
                </Button>
                <Button className="btn btn-secondary" onClick={refreshPage}>
                  Clear
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </div>

      <ToastContainer transition={bounce} />
      <Footer />
    </Fragment>
  );
};

export default CustomerRegister;
