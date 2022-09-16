import React, { useState, Fragment, useEffect } from "react";
import "./style.scss";

import moment from "moment";

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

const Paid = [
  { value: "Free", label: "Free" },
  { value: "Paid", label: "Paid" },
];
const Installation = [
  { value: "Installation 1", label: "Installation 1" },
  { value: "Installation 2", label: "Installation 2" },
  { value: "Installation 3", label: "Installation 3" },
];

const payMode = [
  { value: "Cash", label: "Cash" },
  { value: "Card", label: "Card" },
  { value: "UPI", label: "UPI" },
];

const ReInstall = ({ initialValue, props }) => {
  const [phone, setPhone] = useState(initialValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [paid, setPaid] = useState({});

  // Form Validations

  const [formValues, setFormValues] = useState({
    date: "",
    customerId: "",
    companyName: "",
    phone: "",
    city: "",
    software: "",
    install: "",
    reInstall: "",
    paidFree: "",
    amount: "",
    discountPer: "",
    discountAmt: "",
    grossAmt: "",
    tax: 18,
    totalTaxAmount: "",
    roundAmt: "",
    netAmt: "",
    paidAmt: "",
    balAmt: "",
    payMode: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //If DiscountAmnt is present and  >0
    if (name === "discountAmt" && value && value > 0) {
      console.log("value::", value);
      setFormValues({
        ...formValues,
        [name]: value,
        discountPer: 0,
      });
    }
    //other wise do the usual set the values
    else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  /***UTIlit */
  function handleDiscountPercentage() {
    let getDiscountPercent;
    if (formValues.discountPer > 0) {
      getDiscountPercent = Math.ceil(
        (formValues.amount * formValues.discountPer) / 100
      );
      setFormValues({
        ...formValues,
        discountAmt: getDiscountPercent,
      });
    }
  }

  /***MOve ito seprate file */
  const onBlurEvent = (event) => {
    console.log("Event for Tab Press:", event.target.name);

    switch (event.target.name) {
      case "discountPer":
        handleDiscountPercentage();
        break;

      case "discountAmt":
        const grossAmount = Math.ceil(
          formValues.amount - formValues.discountAmt
        );
        setFormValues({
          ...formValues,
          grossAmt: grossAmount,
        });
        break;

      case "tax":
        const totalTaxAmount = Math.ceil(
          (formValues.grossAmt * formValues.tax) / 100
        );
        setFormValues({
          ...formValues,
          totalTaxAmount: totalTaxAmount,
        });
        break;

      case "totalTaxAmount":
        const getNetAmount = formValues.grossAmt + formValues.totalTaxAmount;
        setFormValues({
          ...formValues,
          netAmt: getNetAmount,
        });
        break;

      case "roundAmt":
        const getRoundAmount =
          formValues.grossAmt + formValues.totalTaxAmount - formValues.roundAmt;
        setFormValues({
          ...formValues,
          netAmt: getRoundAmount,
        });
        break;

      case "paidAmt":
        const balanceAmount = formValues.netAmt - formValues.paidAmt;
        setFormValues({
          ...formValues,
          balAmt: balanceAmount,
        });
        break;
    }
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
    if (!values.amount) {
      errors.amount = "Enter amount";
    }
    if (!values.paidAmt) {
      errors.paidAmt = "Enter paidAmt";
    }
    if (!values.amount) {
      errors.amount = "Enter amount";
    }
    if (!values.paidAmt) {
      errors.paidAmt = "Enter paidAmt";
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

  function handleReset() {
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
              <div className="title"> Re-Installation Entry </div>
              <Row style={{ gap: "5%" }}>
                <Col>
                  <Row>
                    <Row>
                      <DatePicker
                        style={{ marginLeft: "29px" }}
                        label="Date"
                        // defaultValue={moment("2022/07/01", dateFormat)}
                        className="date-picker"
                        isError
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
                            <div className="require"></div>
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
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Select
                        label="Install"
                        options={Installation}
                        className="react-select install-select"
                        placeholder="Select Installation No."
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
                      <TextArea
                        label="Re&nbsp;Install"
                        type="text"
                        rows="3"
                        name="reInstall"
                        className="form-control"
                        value={formValues.reInstall}
                        onChange={handleChange}
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
                      <Select
                        label="Paid/Free"
                        options={Paid}
                        className="react-select"
                        placeholder="Select Paid/Free"
                        // value={paid}
                        onChange={setPaid}
                        defaultValue={Paid[0]}
                        isErrors
                      />
                    </Row>

                    {paid.value === "Paid" ? (
                      <>
                        <Row>
                          <Col>
                            <Input
                              style={{ marginLeft: "26px" }}
                              label="Amt&nbsp;."
                              type="number"
                              name="amount"
                              value={formValues.amount}
                              onChange={handleChange}
                              className="form-control"
                              isError
                              errorMsg={formErrors.amount}
                            />
                          </Col>
                          <Col>
                            <Input
                              label="Discoun"
                              type="number"
                              name="discountPer"
                              className="form-control"
                              placeholder="%"
                              value={formValues.discountPer}
                              onBlur={onBlurEvent}
                              onChange={handleChange}
                            />
                          </Col>
                          <Col>
                            <Input
                              label="Discoun"
                              type="number"
                              name="discountAmt"
                              className="form-control"
                              placeholder="Amt"
                              value={formValues.discountAmt}
                              onBlur={onBlurEvent}
                              onChange={handleChange}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              label="Grs&nbsp;&nbsp;Amt."
                              type="number"
                              name="grossAmt"
                              className="form-control"
                              value={formValues.grossAmt}
                              onChange={handleChange}
                              readOnly={true}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{ marginLeft: "17px" }}
                              label="Tax% "
                              type="number"
                              name="tax"
                              className="form-control"
                              value={formValues.tax}
                              onChange={handleChange}
                              onBlur={onBlurEvent}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{ marginLeft: "22px" }}
                              label="Tax&#8377; "
                              type="number"
                              name="totalTaxAmount"
                              placeholder="&#8377;"
                              className="form-control"
                              value={formValues.totalTaxAmount}
                              onChange={handleChange}
                              onBlur={onBlurEvent}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              style={{ marginLeft: "14px" }}
                              label="Round"
                              type="number"
                              name="roundAmt"
                              className="form-control"
                              onChange={handleChange}
                              value={formValues.roundAmt}
                              onBlur={onBlurEvent}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{ marginLeft: "7px" }}
                              label="NetAmt"
                              type="number"
                              name="number"
                              className="form-control"
                              value={formValues.netAmt}
                              onChange={handleChange}
                              onBlur={onBlurEvent}
                              readOnly={true}
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <Input
                              label="PaidAmt"
                              type="number"
                              name="paidAmt"
                              className="form-control"
                              value={formValues.paidAmt}
                              onChange={handleChange}
                              onBlur={onBlurEvent}
                              isError
                              errorMsg={formErrors.paidAmt}
                            />
                          </Col>
                          <Col>
                            <Input
                              label="Bal.Amt."
                              type="number"
                              name="balAmt"
                              className="form-control"
                              value={formValues.balAmt}
                              onChange={handleChange}
                              readOnly={true}
                            />
                          </Col>
                        </Row>
                      </>
                    ) : null}

                    <Row>
                      <Col>
                        <Select
                          label="PayMode"
                          options={payMode}
                          className="react-select"
                          placeholder="Select Pay Mode"
                          defaultValue={payMode[0]}
                          isError
                        />
                      </Col>

                      <Col>
                        <DatePicker
                          label="Date"
                          style={{ marginLeft: "25px" }}
                          value={new Date()}
                          className="date-picker"
                          isError
                        />
                      </Col>
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
                  id="animate.css"
                >
                  Save
                </Button>
                <Button className="btn btn-secondary" onClick={handleReset}>
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
