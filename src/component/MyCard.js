import React, { Fragment } from "react";
import "../App.css";

const MyCard = () => {
  return (
    <Fragment>
      <h2>Welcome To My Card</h2>
      <i className="bi bi-facebook text-primary"></i>
      <button className="btn btn-success">login</button>
    </Fragment>
  );
};

export default MyCard;
