import React from "react";
import { Link, useParams } from "react-router-dom";
import ServiceHooks from "../../component/Services/ServiceHook/ServiceHooks";
import "./CheckoutDatil.css";
const CheckoutDetail = () => {
  const { checkoutdatailId } = useParams();
  return (
    <div className="mt-5  ">
      <ServiceHooks></ServiceHooks>
      <div className="text-center mt-5">
        <Link to="/checkout">
          <button className="btn btn-primary"> All Service Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutDetail;
