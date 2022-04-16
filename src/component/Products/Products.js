import React from "react";
import "./Products.css";
const Products = (props) => {
  const { name, img, price } = props.service;
  return (
    <div>
      <img className="img-d" src={img} alt="" />
      <button className=" mt-3  btn btn-primary">Chackout</button>
    </div>
  );
};

export default Products;
