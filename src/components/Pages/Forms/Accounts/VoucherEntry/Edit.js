import React, { useState, Fragment, useEffect } from "react";

import moment from "moment";

import tableData from "../../../Tables/Table/Registration/table.json";

// CRUD Componensts
// import Create from "./Create";
// import Edit from "./Edit";

// Reusable Component
import Input from "../../../../../shared/Reusable/Input";
import Select from "../../../../../shared/Reusable/Select";
import TextArea from "../../../../../shared/Reusable/TextArea";
// import DatePicker from "../../../../shared/Reusable/DatePicker";

// Toasitify
import { ToastContainer, toast, cssTransition } from "react-toastify";

import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

import Header from "../../../../../shared/Header/Header";
import SubHeader from "../../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../../shared/Footer/Footer";

// const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

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

const Edit = () => {
  const initialValues = {
    date: "",
    particular: "",
    accountGrp: "",
    amount: "",
    payMode: "",
    entry: "",
    remarks: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [refOpt, setRefOpt] = useState(false);
  const [id, setid] = useState("");

  var index = tableData
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(tableData[index]);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    setFormValues(localStorage.getItem(""));
    setid(localStorage.getItem("id"));

    // console.log("FormErros::", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("FormValues::", formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.particular) {
      errors.particular = "Enter Company Name";
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
            {/* <div className="title"> Install Entry </div> */}
            <Form onSubmit={handleSubmit}>
              <h1> Edit List </h1>
              {/* <div className="title"> Voucher Entry </div> */}
              <Row style={{ gap: "5%" }}>
                <Col>
                  <Row>
                    <Row>
                      <div className="input-fields">
                        <label htmlFor="" className="label">
                          Date
                        </label>
                        <DatePicker
                          style={{ marginLeft: "50px" }}
                          defaultValue={moment("2022/06/01", dateFormat)}
                          format={dateFormat}
                          className="date-picker"
                          name="date"
                          // value={formValues.date}
                        />
                      </div>
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
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Account Group"
                        options={accountGrp}
                        className="react-select "
                        onChange={console.log}
                        // value={refOpt}
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
                        onChange={console.log}
                        // value={formValues.payMode}
                      />
                    </Row>
                    <Row>
                      <Select
                        label="Entry"
                        options={entry}
                        // onChange={handleChange}
                        className="react-select entry-select"
                        onChange={console.log}
                        // value={formValues.entry}
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
                  onClick={(e) => handleSubmit(e)}
                  // id="animate.css"
                >
                  Update
                </Button>
                <Button className="btn btn-secondary"> Clear </Button>
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

export default Edit;
