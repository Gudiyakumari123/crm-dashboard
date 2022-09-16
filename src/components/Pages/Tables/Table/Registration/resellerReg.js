import React, { useState, Fragment } from "react";
import "./reseller.scss";

import Tooltip from "@mui/material/Tooltip";

import tableData from "./table.json";

import { useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";

import { Button } from "react-bootstrap";

import Header from "../../../../../shared/Header/Header";
import SubHeader from "../../../../../shared/SubHeader/SubHeader";
import PDF from "../../../../../shared/PDF/pdf";
// delete
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

// import PDFFile from "../../../../../shared/PDF/pdf";
// import { PDFDownloadLink } from "@react-pdf/renderer";
const ref = React.createRef();
const ResellerReg = () => {
  const navigate = useNavigate();

  // const [openEdit, setOpenEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  const handleShow = () => setShow(true);

  function handleClick() {
    navigate("/reseller-regitration-form");
  }

  return (
    <Fragment>
      <Header />
      <SubHeader />
      <div className="new__table__container">
        <div className="table__content">
          <div className="table__wrapper">
            <div className="table__header">
              <div className="title"> Re- Seller Registration Table </div>
              <div className="right">
                {/* <PDFDownloadLink document={<PDFFile />} fileName="FORM">
                  {({ loading }) =>
                    loading ? "Loading Document..." : "Download"
                  }
                </PDFDownloadLink> */}
                <Pdf targetRef={ref} filename="form.pdf">
                  {({ toPdf }) => (
                    <i className="bx bxs-file" onClick={toPdf}></i>
                  )}
                </Pdf>

                {/* <div ref={ref}>
                  <h1> Hello World</h1>
                  <h1> Hello PDF </h1>
                </div> */}
                {/* <Tooltip title="PDF" placement="top" arrow>
                  <i className="bx bxs-file"></i>
                </Tooltip> */}
                <button className="btn btn-primary" onClick={handleShow}>
                  <i className="bx bx-plus"></i> New Form
                </button>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th> Date of Join </th>
                  <th> Category </th>
                  <th> Company Name </th>
                  <th> Contact Person </th>
                  <th> Nature of Business </th>
                  <th> Address </th>
                  <th> Country </th>
                  <th> State </th>
                  <th> City </th>
                  <th> GSTIN /VAT No </th>
                  <th> Phone Number </th>
                  <th> Alternate Contact </th>
                  <th> Email </th>
                  <th> Website </th>
                  <th> Status </th>
                  <th> Actions </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((index) => (
                  <tr>
                    <td> {index.date} </td>
                    <td>
                      <h6 className="notify"> {index.companyname} </h6>
                    </td>
                    <td> {index.companyname} </td>
                    <td> {index.contactperson} </td>
                    <td> {index.natureofbusiness} </td>
                    <td> {index.address} </td>
                    <td>
                      <div className="country">
                        <img src={index.countryImg} alt="Flag" />
                        <h6> {index.countryTitle} </h6>
                      </div>
                    </td>
                    <td> {index.state} </td>
                    <td> {index.city} </td>
                    <td> {index.vatNo} </td>
                    <td> {index.phoneNo} </td>
                    <td> {index.alternateNo} </td>
                    <td> {index.email} </td>
                    <td>
                      <a href="#"> {index.website} </a>
                    </td>
                    <td>
                      <h6 className="warning"> {index.verified} </h6>
                    </td>
                    <td>
                      <div className="action__container">
                        <div className="ac__icon__holder">
                          <Tooltip title="Edit" placement="top" arrow>
                            <i
                              className="bx bx-edit-alt"
                              onClick={handleClick}
                            ></i>
                          </Tooltip>
                          <Tooltip title="Delete" placement="top" arrow>
                            <i
                              className="bx bx-trash-alt"
                              onClick={handleClickOpen}
                            ></i>
                          </Tooltip>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure want to delete the data
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={handleCloseDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <div ref={ref} className="pdf-dummy">
        <PDF />
      </div>
    </Fragment>
  );
};

export default ResellerReg;
