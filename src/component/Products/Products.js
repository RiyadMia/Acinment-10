import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
const Products = ({ service }) => {
  const { name, img, price, id } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/checkoutdatail/${id}`);
  };
  return (
    <div>
      <img
        className="img-d  shadow p-3 mb-2 bg-body rounded"
        src={img}
        alt=""
      />
      <h3 className="text-center">{name}</h3>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className=" mt-3  btn btn-primary  center"
      >
        Doctor: {name}
      </button>
    </div>
  );
};

export default Products;
