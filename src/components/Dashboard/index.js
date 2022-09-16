import React, { Fragment } from "react";
import "./style.scss";

function Index() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <Fragment>
      <div className="dashboard__container">
        <div className="db__content">
          <div className="db__header">
            <div className="dbh__items">
              <div className="cards">
                <div className="card__header">
                  <div className="left">
                    <h6> Today Sales </h6>
                    <p> Sales Summery </p>
                  </div>
                  <div className="right">
                    <i className="bx bx-cloud-upload"></i> Export
                  </div>
                </div>
                <div className="card__lists">
                  <div className="card__items violet ">
                    <i className="bx bx-transfer-alt"></i>
                    <h6> $1k </h6>
                    <div className="title"> Total Sales </div>
                    <a href="#"> +8% from Yesterday </a>
                  </div>
                  <div className="card__items orange">
                    <i className="bx bx-file"></i>
                    <h6> 300 </h6>
                    <div className="title"> Total Order </div>
                    <a href="#"> -0.3% from Yesterday </a>
                  </div>
                  <div className="card__items green">
                    <i className="bx bx-purchase-tag-alt"></i>
                    <h6> 5 </h6>
                    <div className="title"> Product Sold </div>
                    <a href="#"> +1.8% from Yesterday </a>
                  </div>
                  <div className="card__items blue">
                    <i className="bx bx-user-plus"></i>
                    <h6> 8 </h6>
                    <div className="title"> New Customers </div>
                    <a href="#"> 0.5% from Yesterday </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="dbh__right">
              <figure>
                <img
                  src="https://media.istockphoto.com/photos/financial-graph-on-technology-abstract-background-picture-id913219882?k=20&m=913219882&s=612x612&w=0&h=_nLaajFG3H2TdRKIzszwWpvTLdlvip5gSwcEbx_nyLo="
                  alt="Chart"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Chart Container Start */}
        <div className="chart__content">
          <div className="dbh__items">
            <div className="container">
              <div className="title"> Total Revenue </div>
              <div className="donut-chart-block block">
                <div className="donut-chart">
                  <div id="porcion1" className="recorte">
                    <div className="quesito ios" data-rel="21"></div>
                  </div>
                  <div id="porcion2" className="recorte">
                    <div className="quesito mac" data-rel="39"></div>
                  </div>
                  <div id="porcion3" className="recorte">
                    <div className="quesito win" data-rel="31"></div>
                  </div>
                  <div id="porcionFin" className="recorte">
                    <div className="quesito linux" data-rel="9"></div>
                  </div>
                  <p className="center-date">
                    MAY
                    <br />
                    <span className="scnd-font-color">2022</span>
                  </p>
                </div>
                <ul className="os-percentages horizontal-list">
                  <li>
                    <p className="ios os scnd-font-color">Jan</p>
                    <p className="os-percentage">
                      21<sup>%</sup>
                    </p>
                  </li>
                  <li>
                    <p className="mac os scnd-font-color">Feb</p>
                    <p className="os-percentage">
                      39<sup>%</sup>
                    </p>
                  </li>
                  <li>
                    <p className="linux os scnd-font-color">Mar</p>
                    <p className="os-percentage">
                      9<sup>%</sup>
                    </p>
                  </li>
                  <li>
                    <p className="win os scnd-font-color">Apr</p>
                    <p className="os-percentage">
                      31<sup>%</sup>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dbh__items">
            <div className="title"> Customer Satisfaction </div>
            {/* <div className="container">
              <div className="line-chart-block block">
                <div className="line-chart">
                  <div className="grafico">
                    <ul className="eje-y">
                      <li data-ejeY="30"></li>
                      <li data-ejeY="20"></li>
                      <li data-ejeY="10"></li>
                      <li data-ejeY="0"></li>
                    </ul>
                    <ul className="eje-x">
                      <li>Apr</li>
                      <li>May</li>
                      <li>Jun</li>
                    </ul>
                    <span data-valor="25">
                      <span data-valor="8">
                        <span data-valor="13">
                          <span data-valor="5">
                            <span data-valor="23">
                              <span data-valor="12">
                                <span data-valor="15"></span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <ul className="time-lenght horizontal-list">
                  <li>
                    <a className="time-lenght-btn" href="#14">
                      Week
                    </a>
                  </li>
                  <li>
                    <a className="time-lenght-btn" href="#15">
                      Month
                    </a>
                  </li>
                  <li>
                    <a className="time-lenght-btn" href="#16">
                      Year
                    </a>
                  </li>
                </ul>
                <ul className="month-data clear">
                  <li>
                    <p>
                      APR<span className="scnd-font-color"> 2013</span>
                    </p>
                    <p>
                      <span className="entypo-plus increment"> </span>21<sup>%</sup>
                    </p>
                  </li>
                  <li>
                    <p>
                      MAY<span className="scnd-font-color"> 2013</span>
                    </p>
                    <p>
                      <span className="entypo-plus increment"> </span>48<sup>%</sup>
                    </p>
                  </li>
                  <li>
                    <p>
                      JUN<span className="scnd-font-color"> 2013</span>
                    </p>
                    <p>
                      <span className="entypo-plus increment"> </span>35<sup>%</sup>
                    </p>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="skills">
              <ul className="lines">
                <li className="line l--0">
                  <span className="line__label">Sun</span>
                </li>
                <li className="line l--25">
                  <span className="line__label">Mon</span>
                </li>
                <li className="line l--50">
                  <span className="line__label">Tue</span>
                </li>
                <li className="line l--75">
                  <span className="line__label">Wed</span>
                </li>
                <li className="line l--100">
                  <span className="line__label">Thr</span>
                </li>
              </ul>

              <div className="charts">
                <div className="chart chart--dev">
                  <span className="chart__title">Development</span>
                  <ul className="chart--horiz">
                    <li className="chart__bar" style={{ width: "58%" }}>
                      <span className="chart__label">2019</span>
                    </li>
                    <li className="chart__bar" style={{ width: "98%" }}>
                      <span className="chart__label">2020</span>
                    </li>
                    <li className="chart__bar" style={{ width: "70%" }}>
                      <span className="chart__label"> Last Year </span>
                    </li>
                    <li className="chart__bar" style={{ width: "60%" }}>
                      <span className="chart__label">Last Month</span>
                    </li>
                    <li className="chart__bar" style={{ width: "40%" }}>
                      <span className="chart__label">This Month</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="dbh__items">
            <div className="container">
              <div className="title"> Target VS Reality </div>

              {/* <div className="bar-chart-block block">
                <div className="grafico bar-chart">
                  <ul className="eje-y">
                    <li data-ejeY="60"></li>
                    <li data-ejeY="45"></li>
                    <li data-ejeY="30"></li>
                    <li data-ejeY="15"></li>
                    <li data-ejeY="0"></li>
                  </ul>
                  <ul className="eje-x">
                    <li data-ejeX="37">
                      <i>Sun</i>
                    </li>
                    <li data-ejeX="56">
                      <i>Mon</i>
                    </li>
                    <li data-ejeX="25">
                      <i>Tue</i>
                    </li>
                    <li data-ejeX="18">
                      <i>Wed</i>
                    </li>
                    <li data-ejeX="45">
                      <i>Thrus</i>
                    </li>
                    <li data-ejeX="50">
                      <i>Fri</i>
                    </li>
                    <li data-ejeX="33">
                      <i>Sat</i>
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="volume__lists">
                <div className="volume__items">
                  <div className="volume__bar target th-25">
                    <span className="status1 w-45"></span>
                    <div className="label"> Sun </div>
                  </div>
                  <div className="volume__bar target th-45">
                    <span className="status1 w-15"></span>
                    <div className="label"> Mon </div>
                  </div>
                  <div className="volume__bar target th-15">
                    <span className="status1 w-95"></span>
                    <div className="label"> Tue </div>
                  </div>
                  <div className="volume__bar target th-95">
                    <span className="status1 w-55"></span>
                    <div className="label"> Wed </div>
                  </div>
                  <div className="volume__bar target th-55">
                    <span className="status1 w-95"></span>
                    <div className="label"> Thrus </div>
                  </div>
                  <div className="volume__bar target th-75">
                    <span className="status1 w-55"></span>
                    <div className="label"> Fri </div>
                  </div>
                </div>
                <div className="volume__footer ">
                  <div className="reality">
                    <div className="rfooter__items">
                      <i className="bx bx-lock-open-alt"></i>
                      <h6>
                        Reality Sales <span> Global </span>
                      </h6>
                      <div className="rate"> 8.250 </div>
                    </div>
                    <div className="rfooter__items">
                      <i className="bx bx-package"></i>
                      <h6>
                        Target Sales <span> Commercial </span>
                      </h6>
                      <div className="rate orange"> 12.552 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Chart Container End */}

        {/* Product Container Start */}
        <div className="product__content ">
          <div className="dbh__items" style={{ width: "100%" }}>
            <div className="cards">
              <div className="heading"> Top Product </div>
              <table>
                <thead>
                  <tr>
                    <th> # </th>
                    <th> Name </th>
                    <th> Popularity </th>
                    <th> Sales </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 01 </td>
                    <td> HomeDecor </td>
                    <td>
                      <div className="progress-bar pb-blue">
                        <span className="blue"></span>
                      </div>
                    </td>
                    <td>
                      <span className="status blue"> 45%</span>
                    </td>
                  </tr>
                  <tr>
                    <td> 02 </td>
                    <td> HomeDecor </td>
                    <td>
                      <div className="progress-bar pb-green">
                        <span className="green"></span>
                      </div>
                    </td>
                    <td>
                      <span className="status green"> 45%</span>
                    </td>
                  </tr>
                  <tr>
                    <td> 03 </td>
                    <td> HomeDecor </td>
                    <td>
                      <div className="progress-bar pb-violet">
                        <span className="violet"></span>
                      </div>
                    </td>
                    <td>
                      <span className="status violet"> 45%</span>
                    </td>
                  </tr>
                  <tr>
                    <td> 04 </td>
                    <td> HomeDecor </td>
                    <td>
                      <div className="progress-bar pb-orange">
                        <span className="orange"></span>
                      </div>
                    </td>
                    <td>
                      <span className="status orange"> 45%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="dbh__items" style={{ width: "40%", height: "100%" }}>
            <div className="cards">
              <div className="heading"> Volume VS Service Level </div>

              <div className="volume__lists">
                <div className="volume__items">
                  <div className="volume__bar">
                    <span className="status w-45"></span>
                  </div>
                  <div className="volume__bar">
                    <span className="status w-15"></span>
                  </div>
                  <div className="volume__bar">
                    <span className="status w-95"></span>
                  </div>
                  <div className="volume__bar">
                    <span className="status w-55"></span>
                  </div>
                  <div className="volume__bar">
                    <span className="status w-95"></span>
                  </div>
                  <div className="volume__bar">
                    <span className="status w-55"></span>
                  </div>
                </div>
                <div className="volume__footer">
                  <div className="footer__items">
                    <div className="text">
                      <span className="green"> </span>
                      <div className="title"> Volume</div>
                    </div>
                    <h6> 1325</h6>
                  </div>
                  <div className="footer__items">
                    <div className="text">
                      <span className="blue"> </span>
                      <div className="title"> Service </div>
                    </div>
                    <h6> 635</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Container End */}
      </div>
    </Fragment>
  );
}
export default Index;
