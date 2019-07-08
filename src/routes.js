import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";

import App from "./components/App";
import About from "./components/About";

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
            </Switch>
        );
    }
}

export default Routes;
