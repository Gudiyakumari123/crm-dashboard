import React, { Fragment, useState } from "react";
import "./Home.scss";
import axios from "axios";

import useInterval from "use-interval";

import ArrowUp from "@mui/icons-material/ArrowUpwardOutlined";
import Person from "@mui/icons-material/PersonOutlineOutlined";
import Eye from "@mui/icons-material/VisibilityOutlined";
import Sales from "@mui/icons-material/AttachMoneyOutlined";

//
import Header from "../../shared/Header/Header";
import SubHeader from "../../shared/SubHeader/SubHeader";
import Dashboard from "../Dashboard";
import Footer from "../../shared/Footer/Footer";
import Loading from "../../shared/Loading/Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useInterval(() => {
    setIsLoading(true);
  }, 1000);

  return (
    <Fragment>
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <SubHeader />
          <Dashboard />
          <Footer />
        </>
      )}
    </Fragment>
  );
}
export default Home;

{
  /* <div className="home__container">
            <div className="home__content">
              <div className="home__wrapper">
                <div className="hw__card__container">
                  <div className="hwc__content">
                    <div className="hwc__wrapper">
                      <div className="hwc__items first">
                        <div>
                          <div className="title"> SALES </div>
                          <div className="price">&#8377;&nbsp;4,500</div>
                          <img
                            src="https://www.primefaces.org/apollo-react/assets/layout/images/dashboard/graph-blue.svg"
                            alt=""
                          />

                          <div className="overview-ratio">
                            <div className="overview-direction">
                              <ArrowUp className="icon__uparrow" />
                            </div>
                            <div className="overview-ratio-value box-1">
                              51%
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hwc__items second">
                        <div>
                          <div className="title"> VIEWS </div>
                          <div className="price">&#8377;&nbsp;4,500</div>
                          <img
                            src="https://www.primefaces.org/apollo-react/assets/layout/images/dashboard/graph-green.svg"
                            alt=""
                          />
                          <div className="overview-ratio">
                            <div className="overview-direction">
                              <ArrowUp className="icon__uparrow" />
                            </div>
                            <div className="overview-ratio-value box-2">
                              36%
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hwc__items third">
                        <div>
                          <div className="title"> USERS </div>
                          <div className="price">&#8377;&nbsp;4,500</div>
                          <img
                            src="https://www.primefaces.org/apollo-react/assets/layout/images/dashboard/graph-yellow.svg"
                            alt=""
                          />
                          <div className="overview-ratio">
                            <div className="overview-direction">
                              <ArrowUp className="icon__uparrow" />
                            </div>
                            <div className="overview-ratio-value box-3">
                              19%
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hwc__items four">
                        <div>
                          <div className="title"> SOCIAL </div>
                          <div className="price">&#8377;&nbsp;4,500</div>
                          <img
                            src="https://www.primefaces.org/apollo-react/assets/layout/images/dashboard/graph-red.svg"
                            alt=""
                          />
                          <div className="overview-ratio ">
                            <div className="overview-direction">
                              <ArrowUp className="icon__uparrow" />
                            </div>
                            <div className="overview-ratio-value box-4">
                              25%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="home__pos__container">
                  <div className="home__pos__content">
                    <div className="col-12">
                      <div className="p-panel p-component circle-panel">
                        <div className="p-panel-header">
                          <span className="p-panel-title" id="pr_id_47_header">
                            Status
                          </span>
                          <div className="p-panel-icons"></div>
                        </div>
                        <div
                          className="p-toggleable-content"
                          aria-hidden="false"
                          role="region"
                          id="pr_id_47_content"
                          aria-labelledby="pr_id_47_header"
                        >
                          <div className="p-panel-content">
                            <div className="p-panel-wrapper">
                              <div className="status-title first">Users</div>
                              <div className="circle1">
                                <Person className="icon__user" />
                                <span>75</span>
                              </div>
                            </div>
                            <div className="p-panel-wrapper">
                              <div className="status-title second">Mobile</div>
                              <div className="circle2">
                                <i className="bx bx-mobile-alt"></i>
                                <span>25</span>
                              </div>
                            </div>
                            <div className="p-panel-wrapper">
                              <div className="status-title third">
                                Pageviews
                              </div>
                              <div className="circle3">
                                <Eye className="icon__user" />
                                <span>50</span>
                              </div>
                            </div>
                            <div className="p-panel-wrapper">
                              <div className="status-title four">Sales</div>
                              <div className="circle4">
                                <Sales className="icon__user" />
                                <span>75</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}
