import React, { Fragment } from "react";
import "./style.scss";
import Verified from "@mui/icons-material/VerifiedOutlined";
import Cancel from "@mui/icons-material/CancelOutlined";
import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";

function Table() {
  return (
    <Fragment>
      <Header />
      <SubHeader />
      <div className="new__table__container">
        <div className="table__content">
          <div className="table__wrapper">
            <h1> Table </h1>
            <table>
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Country </th>
                  <th> Agent </th>
                  <th> Date </th>
                  <th> Balance </th>
                  <th> Status </th>
                  <th> Activity </th>
                  <th> Verified </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> James Butt </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Algeria.png"
                        alt="Flag"
                      />
                      <h6> Algeria </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
                        alt="Flag"
                      />
                      <h6> Ioni Bowcher </h6>
                    </div>
                  </td>
                  <td> 09/13/2015 </td>
                  <td> $70,663.00 </td>
                  <td>
                    <h6 className="danger"> UNQUALIFIED </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
                <tr>
                  <td> Josephine Darakjy </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Egypt_%28variant%29.png/1200px-Flag_of_Egypt_%28variant%29.png"
                        alt="Flag"
                      />
                      <h6> Egypt </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.primefaces.org/apollo-react/assets/demo/images/avatar/amyelsner.png"
                        alt="Flag"
                      />
                      <h6> Amy Elsner </h6>
                    </div>
                  </td>
                  <td> 02/09/2019 </td>
                  <td> $82,429.00 </td>
                  <td>
                    <h6 className="warning"> PROPOSAL </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Cancel className="icon__verified cancel" />
                  </td>
                </tr>
                <tr>
                  <td> Art Venere </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/2560px-Flag_of_Panama.svg.png"
                        alt="Flag"
                      />
                      <h6> Panama </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
                        alt="Flag"
                      />
                      <h6> Asiya Javayant </h6>
                    </div>
                  </td>
                  <td> 05/13/2017 </td>
                  <td> $28,334.00 </td>
                  <td>
                    <h6 className="notify"> NEW </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-75"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Cancel className="icon__verified cancel" />
                  </td>
                </tr>
                <tr>
                  <td> Lenna Paprocki </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg"
                        alt="Flag"
                      />
                      <h6> Slovenia </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.primefaces.org/apollo-react/assets/demo/images/avatar/asiyajavayant.png"
                        alt="Flag"
                      />
                      <h6> Asiya Javayant </h6>
                    </div>
                  </td>
                  <td> 09/15/2020 </td>
                  <td> $88,521.00 </td>
                  <td>
                    <h6 className="notify"> NEW </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-25"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
                <tr>
                  <td> Donette Foller </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1280px-Flag_of_South_Africa.svg.png"
                        alt="Flag"
                      />
                      <h6> South Africa </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.primefaces.org/apollo-react/assets/demo/images/avatar/asiyajavayant.png"
                        alt="Flag"
                      />
                      <h6> Asiya Javayant </h6>
                    </div>
                  </td>
                  <td> 05/20/2016 </td>
                  <td> $93,905.00 </td>
                  <td>
                    <h6 className="warning"> PROPOSAL </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-40"
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
                <tr>
                  <td> Mitsue Tollner </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png"
                        alt="Flag"
                      />
                      <h6> Paraguay </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://uploads-ssl.webflow.com/61e1ed9381df3d896381767e/61f33df3ced88a4a1b8a0795_circle-profile-pic%20(1).jpeg"
                        alt="Flag"
                      />
                      <h6> Ioni Bowcher </h6>
                    </div>
                  </td>
                  <td> 09/13/2015 </td>
                  <td> $70,663.00 </td>
                  <td>
                    <h6 className="danger"> UNQUALIFIED </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
                <tr>
                  <td> Leota Dilliard </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Algeria.png"
                        alt="Flag"
                      />
                      <h6> Algeria </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
                        alt="Flag"
                      />
                      <h6> Ioni Bowcher </h6>
                    </div>
                  </td>
                  <td> 09/13/2015 </td>
                  <td> $70,663.00 </td>
                  <td>
                    <h6 className="danger"> UNQUALIFIED </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
                <tr>
                  <td> James Butt </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Algeria.png"
                        alt="Flag"
                      />
                      <h6> Algeria </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.primefaces.org/apollo-react/assets/demo/images/avatar/onyamalimba.png"
                        alt="Flag"
                      />
                      <h6> Ivan Magalhaes </h6>
                    </div>
                  </td>
                  <td> 09/13/2015 </td>
                  <td> $70,663.00 </td>
                  <td>
                    <h6 className="danger"> UNQUALIFIED </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-25"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Cancel className="icon__verified cancel" />
                  </td>
                </tr>
                <tr>
                  <td> James Butt </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Algeria.png"
                        alt="Flag"
                      />
                      <h6> Algeria </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
                        alt="Flag"
                      />
                      <h6> Ioni Bowcher </h6>
                    </div>
                  </td>
                  <td> 09/13/2015 </td>
                  <td> $70,663.00 </td>
                  <td>
                    <h6 className="danger"> UNQUALIFIED </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
                <tr>
                  <td> Leota Dilliard </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Algeria.png"
                        alt="Flag"
                      />
                      <h6> Egypt </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.primefaces.org/apollo-react/assets/demo/images/avatar/bernardodominic.png"
                        alt="Flag"
                      />
                      <h6> Anna Fali </h6>
                    </div>
                  </td>
                  <td> 09/13/2015 </td>
                  <td> $70,663.00 </td>
                  <td>
                    <h6 className="notify"> NEW </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-75"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
                <tr>
                  <td> James Butt </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Algeria.png"
                        alt="Flag"
                      />
                      <h6> Algeria </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
                        alt="Flag"
                      />
                      <h6> Ioni Bowcher </h6>
                    </div>
                  </td>
                  <td> 09/13/2015 </td>
                  <td> $70,663.00 </td>
                  <td>
                    <h6 className="danger"> UNQUALIFIED </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-25"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
                <tr>
                  <td> James Butt </td>
                  <td>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Algeria.png"
                        alt="Flag"
                      />
                      <h6> Algeria </h6>
                    </div>
                  </td>

                  <td>
                    <div className="country">
                      <img
                        src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
                        alt="Flag"
                      />
                      <h6> Ioni Bowcher </h6>
                    </div>
                  </td>
                  <td> 09/13/2015 </td>
                  <td> $70,663.00 </td>
                  <td>
                    <h6 className="danger"> UNQUALIFIED </h6>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar w-100"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Verified className="icon__verified" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Table;
