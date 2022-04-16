import React from "react";
import ServiceHooks from "../../hooks/ServiceHooks";
import Products from "../Products/Products";
import "./Service.css";
const Service = () => {
  const [services, setService] = ServiceHooks([]);
  return (
    <div className="container ">
      <h1 className="text-info mt-5 mb-5 text-center">Our Service</h1>
      <div className="grid shadow p-3 mb-5 bg-body rounded">
        {services.map((service) => (
          <Products key={service.id} service={service}></Products>
        ))}
      </div>
    </div>
  );
};

export default Service;
