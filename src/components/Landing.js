import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import "../assets/styles/landing.css";

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing-page">
                <p>HELLO LANDING</p>
            </div>
        );
    }
}

export default Landing;
