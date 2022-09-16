import React, { Fragment } from "react";

import "./Login.scss";

import Logo from "../../Assets/Images/logo.png";
import Footer from "../Footer/Footer";

import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }

  render() {
    return (
      <Fragment>
        {/* <div className="login-container">
        <div className="row">
          <div className=""></div>
          <div className=" login-box">
            <div className=" login-key">
              <i className="bx bxs-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">ADMIN PANEL</div>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="ui message success">Signed in successfully</div>
            ) : // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            null}
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={handleChange}
                      value={formValues.email}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={handleChange}
                      value={formValues.password}
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                     
                    </div>
                    <div className="col-lg-6 login-btm login-button">
                      <button
                        type="submit"
                        className="btn btn-outline-primary"
                        onClick={handleClick}
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div> 
      </div> */}

        {/* Animated Login Start */}
        <div className="login-container">
          {/* <h2>Weekly Coding Challenge #1: Sign in/up Form</h2> */}

          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                {/* <div className="social-container">
                  <a href="#" className="social">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="bx bxl-google-plus"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div> */}
                <figure>
                  <img src={Logo} alt="" />
                </figure>
                <span>or use your email for registration</span>
                <div className="form__field">
                  <i className="bx bx-user"></i>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form__field">
                  <i className="bx bx-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form__field">
                  <i className="bx bx-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <Link to="/" className="btn-signin">
                  Sign Up
                </Link>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <figure>
                  <img src={Logo} alt="" />
                </figure>
                {/* <span>or use your account</span> */}
                <div className="form__field">
                  <i className="bx bx-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form__field">
                  <i className="bx bx-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <a href="#">Forgot your password?</a>
                <Link to="/home" className="btn-signin">
                  Sign In
                </Link>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button className="btn-signin ghost" id="signIn">
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>

                  <p>Enter your personal details and start journey with us</p>

                  <button className="btn-signin ghost" id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="phone__container">
          <div className="header">
            <figure>
              <img src={Logo} alt="" />
            </figure>

            <div className="container">
              <img
                src="https://c.tenor.com/FtGd7MNyIqkAAAAM/construction-crane.gif"
                alt=""
              />
            </div>
            <Link to="/home" className="btn btn-home">
              Go to Home
            </Link>
          </div>
        </div>
        {/* <Footer className="footer__login" /> */}
        {/* Animated Login End */}
      </Fragment>
    );
  }
}
export default Login;
