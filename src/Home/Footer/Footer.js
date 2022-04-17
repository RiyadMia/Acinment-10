import React from "react";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center   footer">
      <div className="grid text-white">
        <div>
          <h5 className="mt-4">Doctors Service</h5>
          <h5>Dhaka,Mymenshing</h5>
          <h5>Purbadhala,Netrakona</h5>
        </div>
        <div className="">
          <h5 className="mt-4">Dhaka Medical Collage</h5>
          <h5>Doctors Name : M.B.S Abdul </h5>
        </div>
        <div>
          <h5 className="mt-4"> Mobile : 01717000000,0191200000 </h5>
          <h6>Gmail : abdul@gmail.com</h6>
        </div>
      </div>

      <p>
        <small className="text-white">This is footer @ {year}</small>
      </p>
    </footer>
  );
};

export default Footer;
