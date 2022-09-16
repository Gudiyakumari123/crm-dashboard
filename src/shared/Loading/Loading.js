import React from "react";
import "./Loading.scss";

function Loading() {
  return (
    <div className="loading__container">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
}

export default Loading;
