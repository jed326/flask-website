import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { textAlign } from "@material-ui/system";

import "../assets/styles/landing.css";
// import "typeface-roboto";

/*
TODO:
[ ] Need to add a file loader to the webpack -- https://chriscourses.com/blog/loading-fonts-webpack
[ ] Add CSS styling to the enter button
[ ] Add social media icons to the bottom of the page
[X] Add onClick functionality to enter button
[ ] Add loading screen in between React component pages
*/

const classes = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    input: {
        display: "none"
    },
    root: {
        width: "100%",
        maxWidth: 500
    }
}));

const { Title } = Typography;

class Landing extends Component {
    // const classes = useStyles();

    constructor(props) {
        super(props);
    }

    onclick = e => {
        this.props.history.push("/home");
    };

    render() {
        return (
            <div className="landing-page">
                <div className="landing-center">
                    <Typography
                        variant="h1"
                        gutterBottom
                        style={{ color: "white" }}
                    >
                        Jay Deng
                    </Typography>
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
                            style={{
                                paddingLeft: 35,
                                paddingRight: 35
                            }}
                            onClick={this.onclick}
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
