import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Typography } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { textAlign } from "@material-ui/system";

import "../assets/styles/landing.css";

const classes = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    input: {
        display: "none"
    }
}));

const { Title } = Typography;

class Landing extends Component {
    // const classes = useStyles();

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing-page">
                <div className="landing-center">
                    <Title
                        className="landing-text"
                        style={{
                            color: "white",
                            fontSize: "86px",
                            fontFamily: "Roboto"
                        }}
                    >
                        Jay Deng
                    </Title>
                    <div
                        style={{
                            position: "relative",
                            textAlign: "center",
                            paddingTop: 25
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            style={{ paddingLeft: 35, paddingRight: 35 }}
                        >
                            Enter
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
