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
    { value: "Technical Team", label: "Technical Team" },
    { value: "Sales & Support Team", label: "Sales & Support Team" },
    { value: "Customer Excellence Team", label: "Customer Excellence Team" },
];
const Designation = [
    { value: "Jr.Software Engineer", label: "Jr.Software Engineer" },
    { value: "Sr.Software Engineer", label: "Sr.Software Engineer" }

]
const ReportLine = [
    { value: "Deva Subramani", label: "Deva Subramani" },
    { value: "Dhanasekaran J", label: "Dhanasekaran J" },
    { value: "Amutha", label: "Amutha" },
]

const employeeType = [
    { value: "Excutive", label: "Excutive" },
    { value: "Employee", label: "Employee" },
    { value: "Consutant", label: "Consutant" },

]

const Gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" }
]
const maritalStatus = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Seperated", label: "Seperated" },
]
const BloodGroup = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },

]

const Religion = [
    { value: "Hindu", label: "Hindu" },
    { value: "Muslim", label: "Muslim" },
    { value: "Others", label: "Others" },
]
const educationAttainment = [
    { value: "Primary", label: "Primary" },
    { value: "Secondary", label: "Secondary" },
    { value: "College", label: "College" },
    { value: "MBA", label: "MBA" },
    { value: "Dectrate", label: "Doctrate" },


]
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
    function handleOnChange() {
        // alert(firstname);
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
                            <div className="title"> Staff Profile </div>
                            <Row style={{ gap: "5%" }}>
                                <Col>
                                    <Row>
                                        <Row>
                                            <Col>
                                                <Input
                                                    label="Entry&nbsp;No"
                                                    type="text"
                                                    name="companyName"
                                                    className="form-control"
                                                    // onChange={handleChange}
                                                    // value={formValues.companyName}
                                                    // isError
                                                    // errorMsg={formErrors.companyName}
                                                    style={{
                                                        marginLeft: "43px",
                                                    }}
                                                />
                                            </Col>
                                            <Col>
                                                <Input
                                                    style={{ marginLeft: "10px" }}
                                                    label="Date"
                                                    type="date"
                                                    name="AltCont"
                                                    className="form-control"
                                                    onChange={formValues.AltCont}
                                                    required
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Select
                                                label="Department"
                                                options={Status}
                                                className="react-select department-select"
                                                onChange={console.log}
                                                defaultValue={Status[0]}
                                                style={{
                                                    // width:"400px",
                                                    // marginLeft: "60px",

                                                }}
                                            />
                                        </Row>
                                        <Row>
                                            <Select
                                                label="Designation"
                                                options={Designation}
                                                className="react-select designation-select"
                                                onChange={console.log}
                                                defaultValue={Designation[0]}
                                            />
                                        </Row>
                                        <Row>
                                            <Select
                                                label="Reporting&nbsp;Line"
                                                options={ReportLine}
                                                className="react-select ReportLine-select"
                                                onChange={console.log}
                                                defaultValue={ReportLine[0]}
                                            />
                                        </Row>
                                        <Row>
                                            <Select
                                                label="Employee&nbsp;Type"
                                                options={employeeType}
                                                className="react-select employeeType-select"
                                                onChange={console.log}
                                                defaultValue={employeeType[0]}
                                            />
                                        </Row>

                                        <Row>
                                            <Col>
                                                <div className="input-fields">

                                                    <Input
                                                        style={{ marginLeft: "50px" }}
                                                        label="Staff&nbsp;Id"
                                                        type="number"
                                                        name="AltCont"
                                                        className="form-control"
                                                        onChange={formValues.AltCont}
                                                    // required

                                                    />
                                                </div>
                                            </Col>
                                            <Col>
                                                <Input
                                                    style={{ marginLeft: "10px" }}
                                                    label="Date&nbsp;Of&nbsp;Join."
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
                                                label="Staff&nbsp;Name"
                                                type="text"
                                                name="companyName"
                                                className="form-control"

                                                // value={formValues.companyName}
                                                // isError
                                                // errorMsg={formErrors.companyName}
                                                style={{ marginLeft: "25px" }}



                                            />
                                        </Row>

                                        <Row>
                                            <Col>
                                                <div className="input-fields">

                                                    <Input
                                                        style={{ marginLeft: "25px" }}
                                                        label="First&nbsp;Name"
                                                        type="number"
                                                        id="firstname"
                                                        name="firstname"
                                                        className="form-control"
                                                        // onChange={formValues.AltCont}
                                                        onChange={handleOnChange}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col>
                                                <Input
                                                    style={{ marginLeft: "10px" }}
                                                    label="Last&nbsp;Name"
                                                    id="lastname"
                                                    type="number"
                                                    name="lastname"
                                                    className="form-control"
                                                    // onChange={formValues.AltCont}
                                                    onChange={handleOnChange}
                                                    required
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Input
                                                style={{ marginLeft: "10px" }}
                                                label="Father&nbsp;Name"
                                                type="text"
                                                name="companyName"
                                                className="form-control"
                                            // onChange={handleChange}
                                            // value={formValues.companyName}
                                            // isError
                                            // errorMsg={formErrors.companyName}
                                            />
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Select
                                                    // style={{ marginLeft: "10px" }}
                                                    label="Gender"
                                                    options={Gender}
                                                    className="react-select Gender-select"
                                                    onChange={console.log}
                                                    defaultValue={Gender[0]}

                                                />
                                            </Col>
                                            <Col>
                                                <Select
                                                    label="Marital&nbsp;Status"
                                                    options={maritalStatus}
                                                    className="react-select marital-select"
                                                    onChange={console.log}
                                                    defaultValue={maritalStatus[0]}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>

                                                <Select
                                                    label="Blood&nbsp;Group"
                                                    options={BloodGroup}
                                                    className="react-select BloodGroup-select"
                                                    onChange={console.log}
                                                    defaultValue={BloodGroup[0]}
                                                />

                                            </Col>
                                            <Col>
                                                <Input
                                                    style={{ marginLeft: "10px" }}
                                                    label="Date&nbsp;Of&nbsp;Birth"
                                                    type="date"
                                                    name="AltCont"
                                                    className="form-control"
                                                    onChange={formValues.AltCont}
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>

                                                <Select
                                                    label="Religion"
                                                    options={Religion}
                                                    className="react-select Religion-select"
                                                    onChange={console.log}
                                                    defaultValue={Religion[0]}
                                                    style={{ marginLeft: "30px" }}

                                                />

                                            </Col>
                                            <Col>
                                                <div className="input-fields">
                                                    <label htmlFor="" className="label">
                                                        Nationality
                                                        <div className="require"></div>
                                                    </label>
                                                    <Select
                                                        id="country"
                                                        name="country"
                                                        className="react-select nationality-select "
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

                                        </Row>
                                        <Row>
                                            <TextArea
                                                style={{ marginLeft: "38px" }}
                                                label="Address"
                                                type="text"
                                                // rows="3"
                                                className="form-control"
                                                name="address"
                                                onChange={handleChange}
                                                value={formValues.address}
                                            />
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Input
                                                    style={{ marginLeft: "28px" }}
                                                    label="Area/City"
                                                    type="text"
                                                    name="city"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    value={formValues.city}
                                                    isError
                                                    errorMsg={formErrors.city}
                                                />
                                            </Col>
                                            <Col>
                                                <Input
                                                    style={{ marginLeft: "28px" }}
                                                    label="Pin&nbsp;Code"
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
                                                <div className="input-fields">
                                                    <label htmlFor="" className="label">
                                                        Country
                                                    </label>
                                                    <Select
                                                        id="country"
                                                        name="country"
                                                        className="react-select country-selecting "
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
                                                    </label>
                                                    <Select
                                                        id="state"
                                                        name="state"
                                                        className="react-select state-select"
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
                                            <Col>
                                                <div className="input-fields">
                                                    <label htmlFor="" className="label">
                                                        Phone
                                                        {/* <div className="require"></div> */}
                                                    </label>
                                                    <PhoneInput
                                                        style={{ marginLeft: "45px" }}
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
                                                    label="AltCont"
                                                    type="number"
                                                    name="AltCont"
                                                    className="form-control"
                                                    onChange={formValues.AltCont}
                                                    required

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
                                            <Input
                                                // style={{ marginLeft: "120px" }}
                                                label="Email"
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.email.toLowerCase()}
                                            />
                                        </Row>
                                        <Row>
                                            <Input
                                                // style={{ marginLeft: "6px" }}
                                                // label="GST&nbsp;No."
                                                label="International&nbsp;Id&nbsp;Number"
                                                type="text"
                                                name="gstNo"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.gstNo.toUpperCase()}
                                            />
                                        </Row>

                                        <Row>
                                            <Select
                                                label="Educational&nbsp;Attainment"
                                                options={educationAttainment}
                                                className="react-select educational-select"
                                                onChange={console.log}
                                                defaultValue={educationAttainment[0]}
                                            />
                                        </Row>
                                        <Row>
                                            <Input
                                                style={{ marginLeft: "43px" }}
                                                // style={{ marginLeft: "6px" }}
                                                // label="GST&nbsp;No."
                                                label="Experience&nbsp;Details"
                                                type="number"
                                                name="gstNo"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.gstNo.toUpperCase()}
                                            />
                                        </Row>
                                        <Row>
                                            <Input
                                                style={{ marginLeft: "76px" }}
                                                // label="GST&nbsp;No."
                                                label="Previous&nbsp;Job"
                                                type="text"
                                                name="gstNo"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.gstNo.toUpperCase()}
                                            />
                                        </Row>
                                        <Row>
                                            <Input
                                                style={{ marginLeft: "48px" }}
                                                // label="GST&nbsp;No."
                                                label="Language&nbsp;Known"
                                                type="text"
                                                name="gstNo"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.gstNo.toUpperCase()}
                                            />
                                        </Row>
                                        <Row>
                                            <Input
                                                style={{ marginLeft: "84px" }}
                                                // label="GST&nbsp;No."
                                                label="Bank&nbsp;Name"
                                                type="text"
                                                name="gstNo"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.gstNo.toUpperCase()}
                                            />
                                        </Row>
                                        <Row>
                                            <Input
                                                style={{ marginLeft: "78px" }}
                                                label="Bank&nbsp;A/C&nbsp;No"
                                                type="text"
                                                name="gstNo"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.gstNo.toUpperCase()}
                                            />
                                        </Row>
                                        <Row>
                                            <Input
                                                style={{ marginLeft: "92px" }}
                                                // label="GST&nbsp;No."
                                                label="IFSC&nbsp;Code"
                                                type="text"
                                                name="gstNo"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.gstNo.toUpperCase()}
                                            />
                                        </Row>
                                        <Row>
                                            <Input
                                                style={{ marginLeft: "85px" }}
                                                // label="GST&nbsp;No."
                                                label="Salary/Day"
                                                type="text"
                                                name="gstNo"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formValues.gstNo.toUpperCase()}
                                            />
                                        </Row>
                                        <Row>
                                            <TextArea
                                                style={{ marginLeft: "98px" }}
                                                label="Remarks"
                                                // row="3"
                                                placeholder="Remarks"
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
