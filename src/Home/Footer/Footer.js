import React from "react";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center footer">
      <div className="gridFooter text-white">
        <div className="mt-4">
          <small>Doctors Service</small>
          <br />
          <small>Dhaka,Mymenshing</small>
          <br />
          <small>Purbadhala,Netrakona</small>
        </div>
        <div className="mt-4">
          <small>Dhaka Medical Collage</small>
          <br />
          <small>Doctors Name : M.B.S Abdul </small>
        </div>
        <div className="mt-4">
          <small> Mobile : 01717000000,0191200000 </small>
          <br />
          <p>Gmail : abdul@gmail.com</p>
        </div>
      </div>

      <p>
        <small className="text-white">This is footer @ {year}</small>
      </p>
    </footer>
  );
};

export default Footer;
