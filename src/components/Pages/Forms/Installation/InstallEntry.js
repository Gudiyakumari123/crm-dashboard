import React, { useState, Fragment, useEffect } from "react";
import "./style.scss";

import { Category, payMode, Reference } from "../../../../data/crm-constants";
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

const InstallEntry = () => {
  const [formValues, setFormValues] = useState({
    date: "",
    category: "",
    software: "",
    version: "",
    customerId: "",
    companyName: "",
    phone: "",
    city: "",
    amount: "",
    discountPer: 0,
    discountAmt: "",
    grossAmt: "",
    gst: 18,
    totalTaxAmount: 0,
    roundAmt: "",
    netAmt: "",
    paidAmt: "",
    payMode: "",
    transactionNo: "",
    reference: "",
    dealerId: "",
    dealerName: "",
    commission: "30",
    commissionAmt: "",
    commissionPaid: "",
    commiBal: "",
    balAmt: "",
    remarks: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [refOpt, setRefOpt] = useState(false);

  // Form Validations

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

  const handleSelectCategory = (e) => {
    setFormValues({
      ...formValues,
      category: e.value,
    });
  };

  const handleSelectPay = (e) => {
    setFormValues({
      ...formValues,
      payMode: e.value,
    });
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
        const grossAmount = 
          formValues.amount - formValues.discountAmt
        setFormValues({
          ...formValues,
          grossAmt: grossAmount,
        });
        break;

      case "gst":
        const totalTaxAmount = Math.ceil(
          (formValues.grossAmt * formValues.gst) / 100
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

      case "commission":
        const commissionAmount =
          (formValues.netAmt * formValues.commission) / 100;
        setFormValues({
          ...formValues,
          commissionAmt: commissionAmount,
        });
        break;

      case "commissionPaid":
        const commissionBal =
          formValues.commissionAmt - formValues.commissionPaid;
        setFormValues({
          ...formValues,
          commiBal: commissionBal,
        });
        break;
    }
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

  console.log("formErrors::", formErrors);

  const validate = (values) => {
    const errors = {};
    if (!values.category) {
      errors.category = "Enter category";
    }
    if (!values.software) {
      errors.software = "Enter software";
    }
    if (!values.version) {
      errors.version = "Enter version";
    }
    if (!values.customerId) {
      errors.customerId = "Enter customerId";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.amount) {
      errors.amount = "Enter amount";
    }
    if (!values.paidAmt) {
      errors.paidAmt = "Enter paidAmt";
    }
    if (!values.payMode) {
      errors.payMode = "Enter payMode";
    }
    return errors;
  };

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
            <Form onSubmit={handleSubmit}>
              <div className="title"> Installation Entry </div>
              <Row style={{ gap: "5%" }}>
                <Col>
                  <Row>
                    <Row>
                      <DatePicker
                        style={{ marginLeft: "28px" }}
                        label="Date"
                        className="date-picker"
                        // errorMsg="Choose Date"
                        isError
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Category"
                        placeholder="-- Select Category --"
                        options={Category}
                        className="react-select"
                        onChange={(e) => handleSelectCategory(e)}
                        defaultValue={Category[0]}
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
                      <Input
                        label="Version&nbsp;&nbsp;&nbsp;"
                        type="text"
                        name="version"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.version}
                        isError
                        errorMsg={formErrors.version}
                      />
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          style={{ marginLeft: "16px" }}
                          label="Cus&nbsp;Id"
                          type="text"
                          name="customerId"
                          className="form-control"
                          onChange={handleChange}
                          value={formValues.customerId}
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
                          onChange={handleChange}
                          value={formValues.companyName}
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
                            style={{ marginLeft: "14px", width: "213px" }}
                            name="phone"
                            className="form-control"
                            international
                            defaultCountry="IN"
                            // value={formValues.phone}
                            onChange={console.log}
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
                          onChange={handleChange}
                          value={formValues.city}
                          isError
                          errorMsg={formErrors.city}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          style={{ marginLeft: "18px" }}
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
                          label="Disco%"
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
                          label="Discou&#8377;"
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
                          label="GrsAmt."
                          type="number"
                          name="grossAmt"
                          className="form-control"
                          onBlur={onBlurEvent}
                          value={formValues.grossAmt}
                          onChange={handleChange}
                          readOnly={true}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{ marginLeft: "13px" }}
                          label="GST% "
                          type="number"
                          name="gst"
                          className="form-control"
                          onBlur={onBlurEvent}
                          value={formValues.gst}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{ marginLeft: "13px" }}
                          label="GST&nbsp;&#8377;"
                          type="number"
                          name="totalTaxAmount"
                          placeholder="&#8377;"
                          className="form-control"
                          value={formValues.totalTaxAmount}
                          onChange={handleChange}
                          onBlur={onBlurEvent}
                          readOnly={true}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          style={{ marginLeft: "8px" }}
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
                          label="NetAmt"
                          type="number"
                          name="netAmt"
                          className="form-control"
                          value={formValues.netAmt}
                          onChange={handleChange}
                          onBlur={onBlurEvent}
                          readOnly={true}
                        />
                      </Col>

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
                          style={{ marginLeft: "4px" }}
                          label="Bal.Amt."
                          type="number"
                          name="balAmt"
                          className="form-control"
                          value={formValues.balAmt}
                          // onBlur={onBlurEvent}
                          readOnly={true}
                        />
                      </Col>
                      <Col>
                        <Select
                          label="Pay&nbsp;Mode"
                          options={payMode}
                          className="react-select"
                          placeholder="-- Select PayMode --"
                          onChange={(e) => handleSelectPay(e)}
                          defaultValue={payMode[0]}
                          isError
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Input
                        label="Trans.No"
                        type="number"
                        name="transactionNo"
                        className="form-control"
                        value={formValues.transactionNo}
                        onChange={handleChange}
                      />
                    </Row>
                    <Row>
                      <DatePicker
                        label="Date"
                        style={{ marginLeft: "27px" }}
                        className="date-picker"
                        isError
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Referen."
                        options={Reference}
                        // onChange={(e) => handleSelectRefer(e)}
                        onChange={setRefOpt}
                        placeholder="-- Select Reference --"
                        className="react-select ref-select"
                        defaultValue={Reference[1]}
                      />
                    </Row>

                    {refOpt.value === "Dealer" ? (
                      <>
                        <Row>
                          <Col>
                            <Input
                              style={{ marginLeft: "18px" }}
                              label="Deal.Id"
                              type="text"
                              name="dealerId"
                              className="form-control"
                              value={formValues.dealerId}
                              onChange={handleChange}
                            />
                          </Col>
                          <Col>
                            <Input
                              label="Deal.Name"
                              type="text"
                              name="dealerName"
                              className="form-control"
                              value={formValues.dealerName}
                              onChange={handleChange}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              style={{ marginLeft: "8px" }}
                              label="Comm%"
                              type="number"
                              name="commission"
                              className="form-control"
                              value={formValues.commission}
                              onChange={handleChange}
                              onBlur={onBlurEvent}
                              readOnly={true}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{ marginLeft: "7px" }}
                              label="Com.&nbsp;Amt"
                              type="number"
                              name="commissionAmt"
                              className="form-control"
                              value={formValues.commissionAmt}
                              onChange={handleChange}
                              onBlur={onBlurEvent}
                              readOnly={true}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              label="Com.paid"
                              type="number"
                              name="commissionPaid"
                              className="form-control"
                              value={formValues.commissionPaid}
                              onChange={handleChange}
                              onBlur={onBlurEvent}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{ marginLeft: "18px" }}
                              label="Bal.Amt"
                              type="number"
                              name="commiBal"
                              value={formValues.commiBal}
                              onChange={handleChange}
                              onBlur={onBlurEvent}
                              readOnly={true}
                            />
                          </Col>
                        </Row>
                      </>
                    ) : null}
                    <Row>
                      <TextArea label="Remarks" row="3" />
                    </Row>
                  </Row>
                </Col>
              </Row>
              <div className="btn__holder">
                <Button
                  type="isSubmit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  id="animate.css"
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

export default InstallEntry;
