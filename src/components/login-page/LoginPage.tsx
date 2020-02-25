import React, { useReducer } from "react";
import {
  initialStateInterface,
  actionInterface,
  reducerInterface
} from "./types";

const initialState: initialStateInterface = {
  username: "",
  password: ""
};

function reducer(
  state: initialStateInterface,
  action: actionInterface
): reducerInterface {
  switch (action.type) {
    case "username":
      return { username: action.payload, password: state.password };
    case "password":
      return { password: action.payload, username: state.username };
    default:
      return state;
  }
}

const LoginPage = (): JSX.Element => {
  const [state, dispatch]: [any, any] = useReducer<any>(reducer, initialState);

  // console.log(state.username);
  // console.log(state.password);
  console.log(state);

  const onSubmitHandler = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    console.log(state.username);
    console.log(state.password);
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <div className="login-input-holder">
          <label className="login-input-label">Username</label>
          <input
            className="login-input"
            placeholder="username"
            value={state.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              dispatch({ type: "username", payload: e.target.value })
            }
          />
        </div>
        <div className="login-input-holder">
          <label className="login-input-label">Password</label>
          <input
            className="login-input"
            placeholder="password"
            value={state.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              dispatch({ type: "password", payload: e.target.value })
            }
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
