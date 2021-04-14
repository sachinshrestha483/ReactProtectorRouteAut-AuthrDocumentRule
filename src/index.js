import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { auth } from "./Firebase/FirebaseUtils";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

let app = null;

auth.onAuthStateChanged((_user) => {
  if (app == null) {
    ReactDOM.render(
      <React.StrictMode>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
    app = "a";
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
