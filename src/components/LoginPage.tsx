import * as React from "react";

const LoginPage = (): JSX.Element => {
  const onSubmitHandler = (e: any): void => {
    e.preventDefault();
    console.log("radi");
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <div className="login-input-holder">
          <label className="login-input-label">Username</label>
          <input className="login-input" placeholder="username" />
        </div>
        <div className="login-input-holder">
          <label className="login-input-label">Password</label>
          <input className="login-input" placeholder="password" />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
