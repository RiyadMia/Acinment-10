import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
const Products = ({ service }) => {
  const { name, img, price, id } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div>
      <img className="img-d" src={img} alt="" />
      <button
        onClick={() => navigateToServiceDetail(id)}
        className=" mt-3  btn btn-primary  center"
      >
        Chackout
      </button>
    </div>
  );
};

export default Products;
