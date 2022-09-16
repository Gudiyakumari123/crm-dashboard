import React, { Component, Fragment } from "react";
import "./SubHeader.scss";

import classNames from "classnames";

import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class subHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenmenu: false,
    };
  }

  render() {
    return (
      <Fragment>
        <div className="subheader__container">
          <div className="subheader__content">
            <div className="subheader__wrapper">
              <ul>
                <li>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-home-alt-2"></i> Leads
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/leadEntry" className="dropdown-item">
                      <i className="bx bxs-bar-chart-square"></i> Lead Entry
                    </Link>
                    {/* <Link to="/todayFollow" className="dropdown-item">
                      <i className="bx bx-help-circle"></i> Today Followup's
                    </Link>
                    <Link to="/unFollow" className="dropdown-item">
                      <i className="bx bx-bug-alt"></i> Unfollows
                    </Link>
                    <Link to="/followList" className="dropdown-item">
                      <i className="bx bx-error-circle"></i> Followup List
                    </Link>
                    <Link to="/leadReport" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Leads Report
                    </Link>
                    <Link to="/category-wise-lead" className="dropdown-item">
                      <i className="bx bxs-bar-chart-square"></i> Category Wise
                      Leads
                    </Link>
                    <Link to="/software-wise-lead" className="dropdown-item">
                      <i className="bx bx-help-circle"></i> Software Wise Leads
                    </Link>
                    <Link to="/area-wise-lead" className="dropdown-item">
                      <i className="bx bx-bug-alt"></i> Area Wise Leads
                    </Link>
                    <Link to="/country-wise-lead" className="dropdown-item">
                      <i className="bx bx-error-circle"></i> Country Wise Leads
                    </Link>
                    <Link to="/radio-wise-lead" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Ratio Wise Leads
                    </Link>
                    <Link to="/reference-wise-lead" className="dropdown-item">
                      <i className="bx bx-help-circle"></i> Reference Wise Leads
                    </Link>
                    <Link to="/dealer-wise-lead" className="dropdown-item">
                      <i className="bx bx-bug-alt"></i> Dealer Wise Leads
                    </Link>
                    <Link to="/source-wise-lead" className="dropdown-item">
                      <i className="bx bx-error-circle"></i> Source Wise Leads
                    </Link>
                    <Link to="/leadSummery" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Leads Summary
                    </Link> */}
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-cross"></i> Installation
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/installationEntry" className="dropdown-item">
                      <i className="bx bx-podcast"></i> Installation Entry
                    </Link>
                    <Link to="/reInstallationEntry" className="dropdown-item">
                      <i className="bx bx-bug-alt"></i> Re-Installation Entry
                    </Link>
                    {/* <Link to="/demoInstallation" className="dropdown-item">
                      <i className="bx bx-help-circle"></i> Demo Installation
                    </Link>
                   
                    <Link to="/installationReport" className="dropdown-item">
                      <i className="bx bx-error-circle"></i> Installation Report
                    </Link>
                    <Link to="/installationSummary" className="dropdown-item">
                      <i className="bx bxs-bar-chart-square"></i> Installations
                      Summary
                    </Link>
                    <Link
                      to="/demoInstallationReport"
                      className="dropdown-item"
                    >
                      <i className="bx bx-bug-alt"></i> Demo Installation Report
                    </Link>
                    <Link to="/installationHistory" className="dropdown-item">
                      <i className="bx bx-help-circle"></i> Installation History
                    </Link> */}
                  </NavDropdown>

                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-analyse"></i> Service
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/serviceEntry" className="dropdown-item">
                      <i className="bx bx-wallet-alt"></i> Service Entry
                    </Link>
                    {/* <Link to="/trackService" className="dropdown-item">
                      <i className="bx bx-help-circle"></i> Track Service
                    </Link>
                    <Link to="/undeclaredService" className="dropdown-item">
                      <i className="bx bx-bug-alt"></i> Uncleared Services
                    </Link>
                    <Link to="/serviceList" className="dropdown-item">
                      <i className="bx bx-error-circle"></i> Service List
                    </Link>
                    <Link to="/serviceSummary" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Services Summary
                    </Link>
                    <Link to="/category-wise-service" className="dropdown-item">
                      <i className="bx bxs-bar-chart-square"></i> Category Wise
                      Service
                    </Link>
                    <Link to="/software-wise-servie" className="dropdown-item">
                      <i className="bx bx-help-circle"></i> Software Wise
                      Service
                    </Link> */}
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-user-voice"></i> Dealer
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/dealer-registeration" className="dropdown-item">
                      <i className="bx bx-customize"></i> Dealer Registration
                    </Link>
                    {/* <Link to="/dealer-list" className="dropdown-item">
                      <i className="bx bx-help-circle"></i> Dealers List
                    </Link>
                    <Link to="/area-wise-dealer-list" className="dropdown-item">
                      <i className="bx bx-bug-alt"></i> Area Wise Dealers List
                    </Link>
                    <Link
                      to="/country-wise-dealer-list"
                      className="dropdown-item"
                    >
                      <i className="bx bx-error-circle"></i> Country Wise
                      Dealers List
                    </Link>
                    <Link to="/dealerSummary" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Dealers Summary
                    </Link>
                    <Link to="/inactiveDealer" className="dropdown-item">
                      <i className="bx bxs-bar-chart-square"></i> Inactive
                      Dealers
                    </Link> */}
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-user-circle"></i> Customer
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/customer-registration" className="dropdown-item">
                      <i className="bx bxs-user-plus"></i> Customer Registration
                    </Link>
                    <Link
                      to="/customer-receipt-entry"
                      className="dropdown-item"
                    >
                      <i className="bx bxs-user-badge"></i> Customer Receipt
                      Entry
                    </Link>
                    {/* <Link to="/customer-search" className="dropdown-item">
                      <i className="bx bx-bug-alt"></i> Customer Search
                    </Link>
                    <Link to="/dues-report" className="dropdown-item">
                      <i className="bx bx-error-circle"></i> Dues Report List
                    </Link>
                    <Link to="/overdues-report" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Overdues Report
                    </Link>
                    <Link
                      to="/customer-account-statement"
                      className="dropdown-item"
                    >
                      <i className="bx bxs-bar-chart-square"></i> Customer
                      Accounts Statement
                    </Link>
                    <Link to="/customer-list" className="dropdown-item">
                      <i className="bx bx-bug-alt"></i> Customers List
                    </Link>
                    <Link
                      to="/area-wise-customer-list"
                      className="dropdown-item"
                    >
                      <i className="bx bx-error-circle"></i> Area Wise Customers
                      List
                    </Link>
                    <Link
                      to="/country-wise-customer-list"
                      className="dropdown-item"
                    >
                      <i className="bx bx-cabinet"></i> Country Wise Customers
                      List
                    </Link>
                    <Link to="/customer-summary" className="dropdown-item">
                      <i className="bx bxs-bar-chart-square"></i> Customers
                      Summary
                    </Link> */}
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-book-open"></i> Accounts
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Voucher Entry
                    </Link>
                  </NavDropdown>
                  {/* <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-user"></i> Users
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/user-management" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Users Management
                    </Link>
                    <Link to="/user-permission" className="dropdown-item">
                      <i className="bx bxs-bar-chart-square"></i>User
                      Permissions
                    </Link>
                    <Link to="/change-password" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Change Password
                    </Link>
                  </NavDropdown> */}
                  {/* <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-chat"></i> SMS
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/sms-setting" className="dropdown-item">
                      <i className="bx bx-message-rounded-dots"></i> SMS Setting
                    </Link>
                    <Link to="/whatsapp-setting" className="dropdown-item">
                      <i className="bx bxl-whatsapp"></i> Whatsapp Setting
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-cog"></i> Setting
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/company-setting" className="dropdown-item">
                      <i className="bx bx-buildings"></i> Company Setting
                    </Link>
                  </NavDropdown> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default subHeader;
