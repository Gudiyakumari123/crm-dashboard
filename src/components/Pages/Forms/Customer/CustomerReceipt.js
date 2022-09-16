import React, { useState, Fragment, useEffect } from "react";

import moment from "moment";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
// import DatePicker from "../../../../shared/Reusable/DatePicker";

// Toasitify
import { ToastContainer, toast, cssTransition } from "react-toastify";

import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
// Currency
import CurrencyFormat from "react-currency-format";

// Date Picker
// import DatePicker from "react-datepicker";

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

const BillNo = [
  { value: "Bill No 1", label: "Bill No 1" },
  { value: "Bill No 2", label: "Bill No 2" },
  { value: "Bill No 3", label: "Bill No 3" },
];

const payMode = [
  { value: "Cash", label: "Cash" },
  { value: "Card", label: "Card" },
  { value: "UPI", label: "UPI" },
];

const CustomerReceipt = ({ initialValue }) => {
  const [phone, setPhone] = useState(initialValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // Form Validations
  const [formValues, setFormValues] = useState({
    customerId: "",
    companyName: "",
    phone: "",
    phone: "",
    paidAmt: "",
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
    // console.log("FormErros::", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("FormValues::", formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.companyName) {
      errors.companyName = "Enter Company Name";
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
              <div className="title"> Customer Receipt </div>
              <Row style={{ gap: "5%" }}>
                <Col>
                  <Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "20px" }}
                        label="CustomerId"
                        type="text"
                        name="customerId"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.customerId}
                      />
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "12px" }}
                        label="Comp.Name"
                        type="text"
                        name="companyName"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.companyName}
                      />
                    </Row>
                    <Row>
                      <div className="input-fields">
                        <label htmlFor="" className="label">
                          Phone
                        </label>
                        <PhoneInput
                          style={{ marginLeft: "50px" }}
                          label="Phone"
                          name="mobileNumber"
                          international
                          defaultCountry="IN"
                          value={phone}
                          onChange={setPhone}
                        />
                      </div>
                    </Row>

                    <Row>
                      <Select
                        label="BillNo"
                        options={BillNo}
                        className="react-select bill-select"
                        onChange={console.log}
                        defaultValue={BillNo[0]}
                      />
                    </Row>
                  </Row>
                </Col>
                {/* Left Side End */}
                {/* Right Side Start */}
                <Col>
                  <Row>
                    <Row>
                      <Select
                        label="PayMode"
                        options={payMode}
                        className="react-select"
                        onChange={console.log}
                        defaultValue={payMode[0]}
                      />
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "2px" }}
                        label="PaidAmt."
                        type="text"
                        name="paidAmt"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.paidAmt}
                      />
                    </Row>
                    <Row>
                      <TextArea
                        style={{ marginLeft: "4px" }}
                        label="Remarks"
                        name="remarks"
                        row="4"
                        onChange={handleChange}
                        value={formValues.remarks}
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

export default CustomerReceipt;
