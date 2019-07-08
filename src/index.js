import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, history } from "./store";
import Routes from "./routes";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles/style";

ReactDOM.render(
    <Router>
        <Routes />
    </Router>,
    document.getElementById("app")
);
