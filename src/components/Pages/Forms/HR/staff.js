import React from 'react';
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import Select from "../../../../shared/Reusable/Select";
import Input from "../../../../shared/Reusable/Input";
import PhoneInput from "react-phone-number-input";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

import './staff.scss';
function Staff() {
  const Department = [
    { value: "Technical Team", label: "Technical Team" },
    { value: "Sales & Support Team", label: "Sales & Support Team" },
    { value: "Customer Excellence Team", label: "Customer Excellence Team" }
  ]

  const Designation = [
    { value: "Jr Software Enginner", label: "Jr Software Enginner" },
    { value: "Sr software Engineer", label: "Sr software Engineer" },
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

  const educationAttainment = [
    { value: "Primary", label: "Primary" },
    { value: "Secondary", label: "Secondary" },
    { value: "College", label: "College" },
    { value: "MBA", label: "MBA" },
    { value: "Dectrate", label: "Doctrate" },


  ]
  return (
    <>
      <Header />
      <SubHeader />
      <div className="form__container">
        <div className="form__content">
          <div className="title"> Staff Entry </div>
          <div className="form__wrapper">
            <div className="form__left"> 
            ..
             </div>
            <div className="form__left"> ONe </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
};
export default Staff;