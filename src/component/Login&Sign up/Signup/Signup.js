import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebace.init";

import { async } from "@firebase/util";
import SocailLogin from "../../../Home/SocailLogin/SocilLogin";
import Lodeing from "../../../Home/Lodeing/Lodeing";

const Signup = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  /* chacked box*/

  const [agree, setEgree] = useState(false);
  /*Firebace hools install */
  const [createUserWithEmailAndPassword, user, loading, error2] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigetLogin = () => {
    navigate("/login");
  };
  const handleComfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  /* Register Now */

  const handlRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (password !== confirmPassword) {
      setError("You tow password did not match");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  if (loading || updating) {
    return <Lodeing></Lodeing>;
  }
  return (
    <div className="register-form style mt-5">
      <h2 className="text-center  mb-2 text-primary">Please Register</h2>
      <form onSubmit={handlRegister}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          onBlur={handleComfirmPasswordBlur}
          type="password"
          name="confromPassword"
          id=""
          placeholder="confrom Password"
          required
        />
        <p className="text-danger">{error}</p>
        <input
          onClick={() => setEgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={`ps-2 ${agree ? " text-primary" : " text-danger"}`}
          htmlFor="terms"
        >
          Accept Genius Doctors Terms and Conditions .
        </label>
        <input
          disabled={!agree}
          className=" btn btn-primary w-50 d-block mx-auto mt-3"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigetLogin}
        >
          Please Login
        </Link>
      </p>
      {<SocailLogin></SocailLogin>}
    </div>
  );
};

export default Signup;
