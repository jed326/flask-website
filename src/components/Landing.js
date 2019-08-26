import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
const { Title } = Typography;

import "../assets/styles/landing.css";

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="landing-page">
                    <div className="landing-center">
                        <Typography
                            variant="h1"
                            gutterBottom
                            style={{ color: "white" }}
                        >
                            Jay Deng
                        </Typography>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;
