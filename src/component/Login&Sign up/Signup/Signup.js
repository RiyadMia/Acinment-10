import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebace.init";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confromPassword: "",
    ganaral: "",
  });

  const [createUserWithEmailAndPassword, user, loading, hookerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handlemailSubmit = (e) => {
    // setEmail(e.target.value);
    const emailRegex = /\S+@\S+\.\S+/;
    const vailedEmail = emailRegex.test(e.target.value);
    if (vailedEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlpasswordSubmit = (e) => {
    const passwordRegex = /.{6,}/;
    const vailedPassword = passwordRegex.test(e.target.value);
    if (vailedPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: " Minimum 6 characters !!!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  /*confrom password */
  const handconformlpassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confromPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "  passwors don't meach ?" });
      setUserInfo({ ...userInfo, confromPassword: "" });
    }
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    console.log(userInfo);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div className="container   mt-3  style">
      <h2 className=" text-center">Pleace Signup</h2>
      <form onSubmit={handleFromSubmit}>
        <div className="mb-3 mx-auto">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handlemailSubmit}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        {errors?.email && <p className="text-danger">{errors.email}</p>}
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handlpasswordSubmit}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            confrom Password
          </label>

          <input
            onChange={handconformlpassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {errors?.password && <p className="text-danger">{errors.password}</p>}
        {hookerror && <p className="text-danger">{hookerror?.massage}</p>}
        <button type=" Submit" className="btn btn-primary w-100 btn">
          Signup
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
