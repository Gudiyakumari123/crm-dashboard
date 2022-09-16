import React, { useState, Fragment, useEffect } from "react";
import moment from "moment";

// Reusable Component
import Input from "../../../../../shared/Reusable/Input";
import Select from "../../../../../shared/Reusable/Select";
import TextArea from "../../../../../shared/Reusable/TextArea";
import DatePicker from "../../../../../shared/Reusable/DatePicker";

// Toasitify
import { ToastContainer, toast, cssTransition } from "react-toastify";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

import Header from "../../../../../shared/Header/Header";
import SubHeader from "../../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../../shared/Footer/Footer";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck",
});

const accountGrp = [
  { value: "Current Assets", label: "Current Assets" },
  { value: "Expense Direct", label: "Expense Direct" },
  { value: "Fixed Assets", label: "Fixed Assets" },
  { value: "Investments", label: "Investments" },
  { value: "Indirect Income", label: "Indirect Income" },
];

const entry = [
  { value: "Debit", label: "Debit" },
  { value: "Credit", label: "Credit" },
];

const payMode = [
  { value: "Cash", label: "Cash" },
  { value: "Card", label: "Card" },
  { value: "UPI", label: "UPI" },
];

// Form Validations

const VoucherEntry = () => {
  const [formValues, setFormValues] = useState({
    date: null,
    particular: "",
    amount: "",
    accountGrp: "",
    payMode: "",
    entry: "",
    remarks: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSelectAccount = (e) => {
    setFormValues({
      ...formValues,
      accountGrp: e.value,
    });
  };
  const handleSelectPay = (e) => {
    setFormValues({
      ...formValues,
      payMode: e.value,
    });
  };
  const handleSelectEntry = (e) => {
    setFormValues({
      ...formValues,
      entry: e.value,
    });
  };

  const handleDate = (e) => {
    setFormValues({
      ...formValues,
      date: e.value,
    });
    // console.log(date, dateString);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    localStorage.setItem(formValues);
    setIsSubmit(true);
  };

  function getData() {
    console.log(localStorage.getItem(formValues));
  }

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.date) {
      errors.date = "Enter date";
    }
    if (!values.particular) {
      errors.particular = "Enter particular";
    }
    if (!values.accountGrp) {
      errors.accountGrp = "Enter accountGrp";
    }
    if (!values.amount) {
      errors.amount = "Enter amount";
    }
    if (!values.payMode) {
      errors.payMode = "Enter payMode";
    }
    if (!values.entry) {
      errors.entry = "Enter entry";
    }
    return errors;
  };
  useEffect(() => {
    // console.log("FormErros::", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Everything is Good. Form Submitted");
    } else {
      // alert("Please , Fill the all required Fields");
    }
    // return;
  }, [formErrors]);

  console.log("FormValues::", formValues);

  function animateCss() {
    toast.dark("Hey 👋, Data Has Been Saved!", {
      transition: bounce,
    });
  }

  function refreshPage() {
    window.location.reload(false);
  }
  const handleReset = () => {
    setFormValues({
      date: null,
      particular: "",
      amount: "",
      accountGrp: "",
      payMode: "",
      entry: "",
      remarks: "",
    });
  };

  return (
    <Fragment>
      <Header />
      <SubHeader />
      <div className="form-container">
        <div className="form-content">
          <Container>
            <Form onSubmit={handleSubmit}>
              <div className="title"> Voucher Entry </div>
              <Row style={{ gap: "5%" }}>
                <Col>
                  <Row>
                    <Row>
                      <DatePicker
                        style={{ marginLeft: "51px" }}
                        label="Date"
                        className="date-picker"
                        name="date"
                        value={formValues.date}
                        onChange={(e) => handleDate(e)}
                        isError
                        // errorMsg={formErrors.date}
                      />
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "12px" }}
                        label="Particulars"
                        type="text"
                        name="particular"
                        className="form-control"
                        onChange={handleChange}
                        value={formValues.particular}
                        isError
                        errorMsg={formErrors.particular}
                      />
                    </Row>
                    <Row>
                      <Select
                        label="AccountGrp "
                        options={accountGrp}
                        className="react-select ref-select"
                        onChange={(e) => handleSelectAccount(e)}
                        defaultValue={accountGrp[0]}
                        isError
                        errorMsg={formErrors.accountGrp}
                      />
                    </Row>
                    <Row>
                      <Input
                        style={{ marginLeft: "27px" }}
                        label="Amount"
                        type="number"
                        name="amount"
                        className="form-control"
                        value={formValues.amount}
                        onChange={handleChange}
                        isError
                        errorMsg={formErrors.amount}
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
                        label="PayMod"
                        options={payMode}
                        className="react-select country-select"
                        onChange={(e) => handleSelectPay(e)}
                        defaultValue={payMode[0]}
                        isError
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Entry"
                        options={entry}
                        className="react-select entry-select"
                        onChange={(e) => handleSelectEntry(e)}
                        defaultValue={entry[0]}
                        isError
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
                >
                  Save
                </Button>

                {/* <Button
                  className="btn btn-secondary"
                  type="reset"
                  onClick={handleReset}
                >
                  Clear
                </Button> */}
                <Button
                  className="btn btn-secondary"
                  type="button"
                  onClick={refreshPage}
                >
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

export default VoucherEntry;
