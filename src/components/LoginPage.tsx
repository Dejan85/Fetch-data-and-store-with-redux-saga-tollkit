import * as React from "react";

const LoginPage = () => {
  return (
    <div className="login">
      <form className="login-form">
        <div className="login-input-holder">
          <label className="login-input-label">Username</label>
          <input className="login-input" />
        </div>
        <div className="login-input-holder">
          <label className="login-input-label">Password</label>
          <input className="login-input" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
