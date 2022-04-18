import React from "react";
import doctor1 from "../../../images/doctoeService/doctor1.png";
import doctor2 from "../../../images/doctoeService/doctor2.png";
import doctor3 from "../../../images/doctoeService/doctor33.png";
import doctor4 from "../../../images/doctoeService/doctor4.png";
import doctor5 from "../../../images/doctoeService/doctor5.png";
import doctor6 from "../../../images/doctoeService/doctor6.png";
import "./ServiceHoooks.css";
const ServiceHooks = () => {
  return (
    <div className="container grids">
      <div className="center">
        <img src={doctor1} alt="" />
        <h4 className="text-center">Price : 50000</h4>
        <h6 className="text-center">Description</h6>
        <p>
          The person who treats ill and sick people is called a doctor. The one
          who knows how to dress, heal, and cure wounds. He works in a hospital
          where patients are admitted for treatment.
        </p>
      </div>
      <div className="center">
        <img src={doctor2} alt="" />
        <h4 className="text-center">Price : 10000</h4>
        <h6 className="text-center">Description</h6>
        <p>
          A doctor has a very hard job. He wakes up early in the morning, goes
          to the hospital where he works all day long treating patients.
        </p>
      </div>
      <div className="center">
        <img src={doctor3} alt="" />
        <h4 className="text-center">Price : 20000</h4>
        <h6 className="text-center">Description</h6>
        <p>
          Sometimes he performs his duty at night, and when there is any
          emergency, he goes to the hospital at night and cures patients.
        </p>
      </div>
      <div className="center">
        <img src={doctor4} alt="" />
        <h4 className="text-center">Price : 3000</h4>
        <h6 className="text-center">Description</h6>
        <p>
          There are different types of doctors; some are physicians and some are
          surgeons. As the human body is very complex and complicated, after
          getting an MBBS degree, they do specialisation in different parts of
          the body.
        </p>
      </div>
      <div className="center">
        <img src={doctor5} alt="" />
        <h4 className="text-center">Price : 2000</h4>
        <h6 className="text-center">Description</h6>
        <p>
          The profession of a doctor is noble. A doctor who saves the life of a
          sick person is the most sacred and noble act. Helping poor, sick
          people is a type of worship.
        </p>
      </div>
      <div className="center">
        <img src={doctor6} alt="" />
        <h4 className="text-center">Price : 1000</h4>
        <h6 className="text-center">Description</h6>
        <p>
          A doctor’s job is a great job. They are the lifesavers. They work for
          the betterment of humanity. They serve mankind.
        </p>
      </div>
    </div>
  );
};

export default ServiceHooks;
