import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebace.init";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    ganaral: "",
  });

  const [signInWithEmailAndPassword, user, loading, hookerror] =
    useSignInWithEmailAndPassword(auth);

  const handlemailSubmit = (e) => {
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

  const handleFromSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
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
      <h2 className=" text-center">Pleace Login</h2>
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
        {errors?.password && <p className="text-danger">{errors.password}</p>}
        {hookerror && <p className="text-danger">{hookerror?.massage}</p>}
        <button type=" Submit" className="btn btn-primary w-100 btn">
          Login
        </button>
        <p>
          Do not have an account?<Link to="/signup">Signup to Fast</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
