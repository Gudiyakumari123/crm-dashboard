import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import moment from "moment";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import DatePicker from "../../../../shared/Reusable/DatePicker";
// import Country from "../../../../shared/Reusable/Country";

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
  { value: "Wonder POS", label: "Wonder POS" },
  { value: "Health Fly", label: "Health Fly" },
  { value: "Edu Fly", label: "Edu Fly" },
];

const Source = [
  { value: "Dealer", label: "Dealer" },
  { value: "Others", label: "Others" },
];

const Status = [
  { value: "Following", label: "Following" },
  { value: "Completed/Installed", label: "Completed/Installed" },
  { value: "Others", label: "Others" },
];

const ConversionRatio = [
  { value: "100%", label: "100% - Confirmed" },
  { value: "75%", label: "75% - Almost Confirmed" },
  { value: "50%", label: "50% - May be Confirmed" },
  { value: "25%", label: "25% - Just Following" },
  { value: "0%", label: "0% - others" },
];

const ReInstall = ({ initialValue }) => {
  const [phone, setPhone] = useState(initialValue);

  const [formValues, setFormValues] = useState({
    category: "",
    software: "",
    companyName: "",
    contactPerson: "",
    address: "",
    mobileNo: "",
    // alterPh: "",
    email: "",
    source: "",
    dealerId: "",
    dealerName: "",
    others: "",
    status: "",
    conversionRadio: "",
    dateOfJoin: "",
    remarks: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [sourceOption, setSourceOption] = useState(false);
  const current = new Date();
  // Form Validations

  const addressFromik = useFormik({
    initialValues: {
      country: "IN",
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

  const handleSelectCategory = (e) => {
    setFormValues({
      ...formValues,
      Category: e.value,
    });
  };

  const handleSelectPhone = (e) => {
    setFormValues({
      ...formValues,
      mobileNo: phone,
    });
  };
  console.log("handleSelectPhone ::", handleSelectPhone);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormValues("");
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  function handleReset() {
    window.location.reload(false);
  }

  const countries = csc.getAllCountries();
  console.log("countries::", countries);

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
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Everything is Good. Form Submitted");
    }
    console.log("FormErrors::", formErrors);
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.category) {
      errors.category = "Enter category";
    }
    if (!values.software) {
      errors.software = "Enter software";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.contactPerson) {
      errors.contactPerson = "Enter contactPerson";
    }
    if (!values.mobileNo) {
      errors.mobileNo = "Enter mobileNo";
    }
    if (!values.status) {
      errors.status = "Enter status";
    }
    if (!values.conversionRadio) {
      errors.conversionRadio = "Enter conversionRadio";
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

  return (
    <Fragment>
      <Header />
      <SubHeader />

      <div className="form-container">
        <div className="form-content">
          <Container>
            <Form onSubmit={handleSubmit}>
              <div className="title"> Lead Entry </div>
              <Row style={{ gap: "5%" }} className="phone-only">
                <Col>
                  <Row>
                    <Row>
                      <Select
                        label="Category"
                        options={Category}
                        name="category "
                        className="react-select category-select"
                        placeholder="Select Category"
                        onChange={handleSelectCategory}
                        defaultValue={Category[0]}
                        isError
                      />
                    </Row>

                    <Row>
                      <Input
                        style={{ marginLeft: "14px" }}
                        label="Software"
                        type="text"
                        name="software"
                        className="form-control"
                        value={formValues.software}
                        onChange={handleChange}
                        isError
                        errorMsg={formErrors.software}
                      />
                    </Row>
                    <Row>
                      <Col>
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
                      </Col>
                      <Col>
                        <Input
                          style={{ marginLeft: "-4px" }}
                          label="ContPerson"
                          type="text"
                          name="contactPerson"
                          className="form-control"
                          value={formValues.contactPerson}
                          onChange={handleChange}
                          isError
                          errorMsg={formErrors.contactPerson}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            Phone
                            <div className="require"></div>
                          </label>
                          <PhoneInput
                            style={{
                              marginLeft: "30px",
                              width: "50% !important",
                            }}
                            label="Phone"
                            name="mobileNo"
                            international
                            defaultCountry="IN"
                            value={phone}
                            onChange={(e) => handleSelectPhone(e)}
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
                      <Col>
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            Country
                          </label>
                          <Select
                            id="country"
                            name="country"
                            placeholder="Select Country "
                            className="react-select country-select"
                            options={updatedCountries}
                            value={values.country}
                            defaultCountry="IN"
                            // defaultValue="India"
                            onChange={(value) => {
                              setFieldValue("country", value);
                              setFieldValue("state", null);
                              setFieldValue("city", null);
                            }}
                            showDefaultOption={true}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            State
                          </label>
                          <Select
                            id="state"
                            name="state"
                            placeholder="--Select State-- "
                            className="react-select entry-select"
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
                      {/* <Country /> */}
                    </Row>

                    <Row>
                      <Input
                        style={{ marginLeft: "10px" }}
                        label="Area/City"
                        type="text"
                        name="city"
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </Row>
                    <Row>
                      <TextArea
                        style={{ marginLeft: "16px" }}
                        label="Address"
                        type="text"
                        rows="2"
                        className="form-control"
                        required={require}
                      />
                    </Row>
                  </Row>
                </Col>
                {/* Left Side End */}
                {/* Right Side Start */}
                <Col>
                  <Row>
                    <Row>
                      <Col>
                        <Input
                          style={{ marginLeft: "17px" }}
                          label="Email"
                          type="email"
                          name="email"
                          className="form-control"
                          value={formValues.email.toLowerCase()}
                          onChange={handleChange}
                          required={require}
                        />
                      </Col>
                      <Col>
                        <Select
                          label="Source"
                          options={Source}
                          className="react-select "
                          placeholder="--Select Source--"
                          onChange={setSourceOption}
                          defaultValue={Source[1]}
                        />
                      </Col>
                    </Row>

                    {sourceOption.value === "Dealer" ? (
                      <>
                        <Row>
                          <Col>
                            <Input
                              style={{ marginLeft: "1px" }}
                              label="DealerId"
                              type="number"
                              name="dealerId"
                              className="form-control"
                              value={formValues.dealerId}
                              onChange={handleChange}
                            />
                            <p className="error-message">
                              {formErrors.dealerId}
                            </p>
                          </Col>

                          <Col>
                            <Input
                              style={{ marginLeft: "7px" }}
                              label="Name"
                              type="email"
                              name="dealerName"
                              className="form-control"
                              value={formValues.dealerName}
                              onChange={handleChange}
                            />
                          </Col>
                          {/* <p className="error-message">
                            {formErrors.dealerName}
                          </p> */}
                        </Row>
                      </>
                    ) : null}

                    <Row>
                      <Input
                        style={{ marginLeft: "12px" }}
                        label="Others"
                        type="text"
                        name="others"
                        className="form-control"
                        value={formValues.others}
                        onChange={handleChange}
                      />
                    </Row>

                    <Row>
                      <Col>
                        <Select
                          label="Status"
                          options={Status}
                          className="react-select status-select "
                          placeholder="Select Source"
                          defaultValue={Status[0]}
                          isError
                        />
                      </Col>
                      <Col>
                        <Select
                          label="Ratio"
                          options={ConversionRatio}
                          className="react-select "
                          placeholder="Select Source"
                          defaultValue={ConversionRatio[0]}
                          isError
                        />
                      </Col>
                    </Row>

                    <Row>
                      <DatePicker
                        label="Date"
                        style={{ marginLeft: "25px" }}
                        className="date-picker"
                        name="date"
                        value={current}
                        isError
                      />
                    </Row>

                    <Row>
                      <TextArea label="Remarks" row="3" />
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
                <Link to="/leadEntry">
                  <Button className="btn btn-secondary" onClick={handleReset}>
                    Clear
                  </Button>
                </Link>
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

export default ReInstall;
