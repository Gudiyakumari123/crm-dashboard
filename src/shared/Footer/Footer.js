import React, { Fragment } from "react";
import "./Footer.scss";

function footer() {
  return (
    <Fragment>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__wrapper">
            <div className="left">
              &#169; CRM Management. All rights reserved.
            </div>
            <div className="left">
              Powered by :
              <a href="http://selromsoft.in/" target="_blank" rel="noreferrer">
                Selrom Software
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default footer;
