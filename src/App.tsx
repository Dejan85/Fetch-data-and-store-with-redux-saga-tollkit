import React from "react";
import "./style/index.scss";

//components
import LoginPage from "./components/login-page/LoginPage";

//redux
import reducer from "./redux/slice/slice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

//saga
import createSagaMiddleware from "redux-saga";
import { fetchData } from "./redux/saga/saga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(fetchData);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <LoginPage />
      </div>
    </Provider>
  );
}

export default App;
