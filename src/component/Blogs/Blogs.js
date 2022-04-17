import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <br />
      <h2>1. Difference between authorization and authentication ?</h2>
      <br />
      <h3>. Authorization</h3>
      <p>01. Authorization determines what resources a user can access.</p>
      <p>
        02. Authorization works through settings that are implemented and
        maintained by the organization.
      </p>
      <p>03. Authorization always takes place after authentication.</p>
      <p>04. Authorization isn’t visible to or changeable by the user.</p>

      <h3>. Authentication</h3>
      <p>01. Authentication verifies who the user is.</p>
      <p>
        02. Authentication works through passwords, one-time pins, biometric
        information, and other information provided or entered by the user.
      </p>
      <p>
        03. Authentication is the first step of a good identity and access
        management process.
      </p>
      <p>
        04. Authentication is visible to and partially changeable by the user.
      </p>
      <br />
      <h2>02.1. What other options do you have to implement authentication?</h2>
      <br />
      <p>
        . Authentication is used by a server when the server needs to know
        exactly who is accessing their information or site
      </p>
      <p>
        . Authentication is used by a client when the client needs to know that
        the server is system it claims to be.
      </p>
      <p>
        . In authentication, the user or computer has to prove its identity to
        the server or client.
      </p>
      <p>
        . Usually, authentication by a server entails the use of a user name and
        password. Other ways to authenticate can be through cards, retina scans,
        voice recognition, and fingerprints.
      </p>
      <br />
      <h2>02.2. Why are you using firebase?</h2>
      <br />
      <h5> . Cloud Messaging: </h5>
      <p>
        Deliver and receive messages in a more reliable way across platforms
      </p>
      <h5>. Authentication:</h5>
      <p> Have a lot less friction with acclaimed authentication</p>
      <h5>. Hosting</h5>
      <p>Deliver web content faster</p>
      <h5>. Remote Configuration</h5>
      <p> Customize your app on the go</p>
      <h5>. Storage:</h5>
      <p>: File storing made easy</p>
    </div>
  );
};

export default Blogs;
