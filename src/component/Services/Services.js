import React from "react";
import ServiceHooks from "../../hooks/ServiceHooks";
import Products from "../Products/Products";
import "./Services.css";
const Services = () => {
  const [services, setService] = ServiceHooks([]);
  return (
    <div className="container ">
      <h1 className="text-info mt-5 mb-5 text-center">Doctors Services</h1>
      <div className="grid ">
        {services.map((service) => (
          <Products key={service.id} service={service}></Products>
        ))}
      </div>
    </div>
  );
};

export default Services;
