import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "./assets/css/reset.scss";
import "amfe-flexible";

import { Provider } from "react-redux";
// import store from "./pages/city/store";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
