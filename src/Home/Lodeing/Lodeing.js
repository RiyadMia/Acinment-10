import React from "react";
import { Spinner } from "react-bootstrap";
import "./Lodeing.css";
const Lodeing = () => {
  return (
    <div style={{ hight: "300px" }} className="w-100 d-flex      lodeing">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Lodeing;
