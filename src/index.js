import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitables";
import store from "./reducer/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
