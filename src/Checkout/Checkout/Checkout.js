import React from "react";
import { Link } from "react-router-dom";
import dhaka from "../../images/medical coolge/dhaka madical collage.jpg";
import hospital from "../../images/medical coolge/hospital-building-modern-parking-lot-59693686.jpg";
import mymenshing from "../../images/medical coolge/Mymensingh-Medical-College-Hospital-MMCH-2108200604.jpg";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div className="container">
      <div className="">
        <h1 className="text-center text-info mt-4">
          Please All Doctors Services{" "}
        </h1>
      </div>

      <div className=" collage">
        <div className="">
          <img src={dhaka} alt="" />
        </div>
        <div className="margin">
          <img src={mymenshing} alt="" />
        </div>
        <div className="margin">
          <img src={hospital} alt="" />
        </div>
      </div>
      <div className=" collage">
        <div className=" border shadow-sm p-3 mb-5 bg-body rounded ">
          <h5>Dhaka Community Hospital</h5>
          <h6> Dr. Mahamud Riyad Foysal</h6>
          <p>FCPS, FRCP (UK), DDV (Austria) </p>
          <p>Private Practice</p>
          <p>Commandant AFIP, Dhaka Cantt</p>
          <p>Telephone: 01715006600 </p>
          <p> Email: mhoq47@gmail.com</p>
        </div>
        <div className=" border shadow-sm p-3 mb-5 bg-body rounded">
          <h5> Mymenshing Community Hospital</h5>
          <h6> Dr. Mahamud Riyad Foysal</h6>
          <p>MBBS, M Sc (UK)</p>
          <p>Head of Microbiology,</p>
          <p>Community Based Medical College,</p>
          <p>Winnerpar, Mymensingh, Bangladesh</p>
          <p>Telephone: (091)55253 (res), 01711480253</p>
          <p></p>
        </div>
        <div className=" border shadow-sm p-3 mb-5 bg-body rounded">
          <h5>Community Hospital</h5>
          <h6> Dr. Mahamud Riyad Foysal</h6>
          <p>MBBS</p>
          <p>PRINCIPAL GP; Full Time General Practitioner</p>
          <p>NHS, UK</p>
          <p>Email: bubudada@aol.com</p>
          <p>Telephone: 01254 226677 </p>
        </div>
      </div>
      <Link to="/servise" className="text-decoration-none trxt-center">
        more service...
      </Link>
    </div>
  );
};

export default Checkout;
