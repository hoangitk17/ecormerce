import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Main from "./views";
import "./styles/index.scss";

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
