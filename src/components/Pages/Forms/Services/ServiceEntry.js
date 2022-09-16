import React, { useState, Fragment, useEffect } from "react";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import DatePicker from "../../../../shared/Reusable/DatePicker";

// Toasitify
import { ToastContainer, toast, cssTransition } from "react-toastify";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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

const Category = [
  { value: "Service", label: "Service" },
  { value: "Updation", label: "Updation" },
];
const Priority = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];

const Installation = [
  { value: "Installation 1", label: "Installation 1" },
  { value: "Installation 2", label: "Installation 2" },
  { value: "Installation 3", label: "Installation 3" },
];

const Status = [
  { value: "Active", label: "Active" },
  { value: "Completed", label: "Completed" },
];

const ReInstall = ({ initialValue }) => {
  const [phone, setPhone] = useState(initialValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // Form Validations
  const [formValues, setFormValues] = useState({
    date: "",
    customerId: "",
    companyName: "",
    phone: "",
    city: "",
    install: "",
    software: "",
    category: "",
    details: "",
    status: "",
    priority: "",
    remarks: "",
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

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Everything is Good. Form Submitted");
    } else {
      // alert("Please , Fill the all required Fields");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.customerId) {
      errors.customerId = "Enter customerId";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.software) {
      errors.software = "Enter software";
    }
    return errors;
  };

  console.log("FormValues::", formValues);

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
              <div className="title"> Service Entry </div>
              <Row style={{ gap: "5%" }}>
                <Col>
                  <Row>
                    <Row>
                      <DatePicker
                        label="Date"
                        style={{ marginLeft: "29px" }}
                        className="date-picker"
                      />
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          style={{ marginLeft: "19px" }}
                          label="Cus&nbsp;Id"
                          type="text"
                          name="customerId"
                          className="form-control"
                          value={formValues.customerId}
                          onChange={handleChange}
                          isError
                          errorMsg={formErrors.customerId}
                        />
                      </Col>
                      <Col>
                        <Input
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
                    </Row>
                    <Row>
                      <Col>
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            Phone
                            <div className="require"> </div>
                          </label>
                          <PhoneInput
                            style={{ marginLeft: "16px", width: "210px" }}
                            value={phone}
                            name="mobileNumber"
                            className="form-control"
                            international
                            defaultCountry="IN"
                            onChange={setPhone}
                          />
                        </div>
                      </Col>
                      <Col>
                        <Input
                          style={{ marginLeft: "35px" }}
                          label="City"
                          type="text"
                          name="city"
                          className="form-control"
                          value={formValues.city}
                          onChange={handleChange}
                          isError
                          errorMsg={formErrors.city}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Select
                        label="Install"
                        options={Installation}
                        className="react-select install-select"
                        onChange={console.log}
                        defaultValue={Installation[0]}
                        isError
                      />
                    </Row>
                    <Row>
                      <Input
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
                      <Select
                        label="Category"
                        options={Category}
                        className="react-select"
                        onChange={console.log}
                        defaultValue={Category[0]}
                        isError
                      />
                    </Row>
                  </Row>
                </Col>
                {/* Left Side End */}
                {/* Right Side Start */}
                <Col>
                  <Row>
                    <Row>
                      <TextArea
                        style={{ marginLeft: "14px" }}
                        label="Details"
                        type="text"
                        rows="2"
                        name="details"
                        className="form-control"
                        value={formValues.details}
                        onChange={handleChange}
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Status"
                        options={Status}
                        className="react-select status-select-13"
                        onChange={console.log}
                        defaultValue={Status[0]}
                        isError
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Priority"
                        options={Priority}
                        className="react-select country-select"
                        onChange={console.log}
                        defaultValue={Priority[0]}
                      />
                    </Row>

                    <Row>
                      <DatePicker
                        label="Date"
                        style={{ marginLeft: "25px" }}
                        className="date-picker"
                        onChange={console.log}
                      />
                    </Row>
                    <Row>
                      <TextArea
                        label="Remarks"
                        row="3"
                        name="remarks"
                        value={formValues.remarks}
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

export default ReInstall;
