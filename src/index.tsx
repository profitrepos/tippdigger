import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "focus-visible";

import "normalize.css";
import "./styles/global.scss";
import App from "./App";
import { store } from "./store/store";

const initialOptions = {
  "client-id":
    "AZtOqoSaZg9tEjJ9MTkzknvsmmpHIadTVCEA4hiAhy77QI5l3KzhByxoznI9MxsOgDjh7NSTGUxma1GQ",
  currency: "USD",
  intent: "capture",
};

ReactDOM.render(
  <PayPalScriptProvider options={initialOptions}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </PayPalScriptProvider>,

  document.getElementById("root")
);
