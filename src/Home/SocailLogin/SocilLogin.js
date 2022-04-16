import React from "react";
import google from "../../images/socail/google.png";
import github from "../../images/socail/GitHubMarkremovebgpreview30x30.png";
import auth from "../../firebace.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./SocilLogin.css";
const SocailLogin = () => {
  /*signInWithGithub */
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  /*signInWithGoogle */
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let erroElement;

  if (loading || loading1) {
    return "Lodeing...";
  }

  if (error || error1) {
    erroElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {erroElement}
      <div className="d-flex gap">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-30 mx-auto d-block  gap "
        >
          <img className="google" src={google} alt="" />
          <span className="px-2">
            <small>Google sign in</small>
          </span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-30 mx-auto d-block  gaps "
        >
          <img className="github" src={github} alt="" />
          <span className="px-2">
            <small>Github sign in</small>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
