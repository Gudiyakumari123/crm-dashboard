import React, { useState, Fragment, useEffect } from "react";

import moment from "moment";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import DatePicker from "../../../../shared/Reusable/DatePicker";

// Toasitify
import { ToastContainer, toast, cssTransition } from "react-toastify";

// Country State City
import { useFormik } from "formik";
import csc from "country-state-city";
import countryList from "react-select-country-list";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// import Flag from "react-flagpack";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";

// const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck",
});

const Category = [
  { value: "Company", label: "Company" },
  { value: "Freelancer", label: "Freelancer" },
];

const DealerRegister = ({ initialValue }) => {
  const [phone, setPhone] = useState(initialValue);
  const [alterPh, setAlterPh] = useState(initialValue);

  const [formValues, setFormValues] = useState({
    date: "",
    category: "",
    companyName: "",
    contactPerson: "",
    nature: "",
    address: "",
    phone: "",
    altContact: "",
    areaCity: "",
    email: "",
    remarksDealer: "",
    remarksUser: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dateFormat = "DD/MM/YYYY";

  // Form Validations

  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    // onSubmit: (values) => console.log(JSON.stringify(values)),
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

  console.log("Country", values.country.label);

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
    if (!values.category) {
      errors.category = "Enter category";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.contactPerson) {
      errors.contactPerson = "Enter contactPerson";
    }
    if (!values.nature) {
      errors.nature = "Enter nature";
    }
    if (!values.city) {
      errors.city = "Enter City";
    }
    if (!values.nature) {
      errors.nature = "Enter nature";
    }
    return errors;
  };

  console.log("FormValues::", formValues);

  // const options = useMemo(() => countryList().getData(), []);

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
            <Form>
              <div className="title"> Dealer Registration </div>
              <Row style={{ gap: "5%" }}>
                <Col>
                  <Row>
                    <Row>
                      <DatePicker
                        label="Date"
                        style={{ marginLeft: "43px" }}
                        // defaultValue={moment("2022/06/01", dateFormat)}
                        format={dateFormat}
                        className="date-picker"
                        isError
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Category"
                        options={Category}
                        className="react-select category-select"
                        defaultValue={Category[0]}
                        isError
                      />
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "9px" }}
                        label="Company"
                        type="text"
                        name="companyName"
                        className="form-control"
                        value={formValues.companyName}
                        onChange={handleChange}
                        isError
                        errorMsg={formErrors.companyName}
                      />
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "-3px" }}
                        label="ContPerson"
                        type="text"
                        name="contactPerson"
                        className="form-control"
                        value={formValues.contactPerson}
                        onChange={handleChange}
                        isError
                        errorMsg={formErrors.contactPerson}
                      />
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "28px" }}
                        label="Nature"
                        type="text"
                        name="nature"
                        className="form-control"
                        value={formValues.nature}
                        onChange={handleChange}
                        isError
                        errorMsg={formErrors.nature}
                      />
                    </Row>
                    <Row>
                      <TextArea
                        style={{ marginLeft: "22px" }}
                        label="Address"
                        type="text"
                        rows="2"
                        name="address"
                        className="form-control"
                        value={formValues.address}
                        onChange={handleChange}
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
                            style={{ marginLeft: "30px" }}
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
                        <Col>
                          <Input
                            style={{ marginLeft: "10px" }}
                            label="AltCont."
                            type="text"
                            name="altContact"
                            className="form-control"
                            value={formValues.altContact}
                            onChange={handleChange}
                          />
                        </Col>
                      </Col>
                    </Row>
                  </Row>
                </Col>
                {/* Left Side End */}
                {/* Right Side Start */}
                <Col>
                  <Row>
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
                            placeholder="Select Country "
                            className="react-select country-select"
                            options={updatedCountries}
                            value={values.country}
                            onChange={(value) => {
                              setFieldValue("country", value);
                              setFieldValue("state", null);
                              setFieldValue("city", null);
                            }}
                            defaultValue={values.country["India"]}
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
                            placeholder="--Select State-- "
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
                        style={{ marginLeft: "13px" }}
                        label="Area/City"
                        type="text"
                        name="city"
                        className="form-control"
                        value={formValues.city}
                        onChange={handleChange}
                        isError
                        errorMsg={formErrors.city}
                      />
                    </Row>

                    <Row>
                      <Input
                        style={{ marginLeft: "34px" }}
                        label="Email"
                        type="email"
                        name="email"
                        className="form-control"
                        value={formValues.email.toLowerCase()}
                        onChange={handleChange}
                      />
                    </Row>

                    <Row>
                      <TextArea
                        style={{ marginLeft: "14px" }}
                        label="Remarks"
                        placeholder="Remarks by Dealer"
                        row="3"
                        name="remarksDealer"
                        value={formValues.remarksDealer}
                        onChange={handleChange}
                      />
                    </Row>
                    <Row>
                      <TextArea
                        style={{ marginLeft: "14px" }}
                        label="Remarks"
                        placeholder="Remarks by User"
                        row="3"
                        name="remarksUser"
                        value={formValues.remarksUser}
                        onChange={handleChange}
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
                  // id="animate.css"
                  value="isSubmit"
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

export default DealerRegister;
