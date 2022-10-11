import React, { Fragment, useState } from "react";
import "./Header.scss";

import classNames from "classnames";

import Logout from "@mui/icons-material/LogoutOutlined";
import Tooltip from "@mui/material/Tooltip";
import Notification from "@mui/icons-material/NotificationsNone";
import GridViewIcon from "@mui/icons-material/GridView";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";

import Logo from "../../Assets/Images/logo.png";

import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { useUserContext } from "../../Context/useContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenmenu: false,
    };
  }

  openMenu() {
    const { isOpenmenu } = this.state;
    this.setState({
      isOpenmenu: !isOpenmenu,
    });
  }
  render() {
    const { isOpenmenu } = this.state;
    return (
      <Fragment>
        <div className="header__container">
          <div className="header__content">
            <div className="header__wrapper">
              <div className="header__items">
                <figure>
                  <a href="/home">
                    <img src={Logo} alt="logo" />
                  </a>
                </figure>
              </div>

              <div
                className={classNames("sidenav-toggle", {
                  isOpenmenu: isOpenmenu,
                })}
                onClick={() => {
                  this.openMenu();
                }}
              >
                <div className="bars">
                  <div></div>
                </div>
              </div>
              <div className="header__items left">
                <Link to="/search-lists">
                  <SearchIcon className="icon__app" />
                </Link>
                <GridViewIcon className="icon__app" />
                <Notification className="icon__notify" />

                <Avatar
                  alt="Selrom Soft"
                  src="https://ddgobkiprc33d.cloudfront.net/5c20071a-c083-4548-b3b8-874dd092647e.png"
                />
                <Tooltip title="Logout" arrow>
                  <Logout className="icon__logout" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        {isOpenmenu ? (
          <div className="megamenu__container">
            <div className="megamenu__content">
              <ul>
                <li>
                  {/* <NavDropdown
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
                  </NavDropdown> */}
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
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-book-open"></i> Sales
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Customer
                    </Link>
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Customer Product
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-book-open"></i> HR
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Staff Details
                    </Link>
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Payroll
                    </Link>
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Attendance
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-book-open"></i> Admin
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Stock
                    </Link>
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Aggrements
                    </Link>
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Suppliers
                    </Link>
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
                      <i className="bx bx-cabinet"></i> Order
                    </Link>
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Transaction / Sales 
                    </Link> <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Operational
                    </Link> <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Financial
                    </Link> <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Tax
                    </Link>
                    <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Voucher Entry
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className="bx bx-book-open"></i> Customer Excellence
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                     <Link to="/voucher-entry" className="dropdown-item">
                      <i className="bx bx-cabinet"></i> Enqueries
                    </Link>
                  </NavDropdown>
                  
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}
export default Header;
