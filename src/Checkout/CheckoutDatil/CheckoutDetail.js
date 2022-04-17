import React from "react";
import { Link, useParams } from "react-router-dom";

const CheckoutDetail = () => {
  const { checkoutdatailId } = useParams();
  return (
    <div>
      <h1>check out ditals{checkoutdatailId}</h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Service Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutDetail;
