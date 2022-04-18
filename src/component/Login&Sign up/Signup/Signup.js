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

const Signup = () => {
  /* chacked box*/

  const [agree, setEgree] = useState(false);
  /*Firebace hools install */
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigetLogin = () => {
    navigate("/login");
  };
  /* Register Now */

  const handlRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confromPassword = event.target.confromPassword.value;
    await createUserWithEmailAndPassword(email, password, confromPassword);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  if (loading || updating) {
    return "Lodeing";
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
          type="password"
          name="confromPassword"
          id=""
          placeholder="confrom Password"
          required
        />
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
