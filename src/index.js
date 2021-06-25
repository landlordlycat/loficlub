import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./styles/App.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "jquery/dist/jquery.min.js"
// Install Popup
import InstallPopup from "./InstallAppPopup"

ReactDOM.render(
  <React.StrictMode>
    <InstallPopup />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
