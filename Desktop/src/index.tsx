import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css"
import { Auth0Provider } from "@auth0/auth0-react";

const root = document.getElementById("root");

render(
  <Auth0Provider
    domain="kachii-auth.eu.auth0.com"
    clientId={process.env.REACT_APP_CLIENT_ID || ""}
    redirectUri={"http://127.0.0.1:3000/profile"}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>,
  root
);
