import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const classes = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false
        };
    }

    toggleDrawer = (side, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        this.setState({ [side]: open });
    };

    sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={this.toggleDrawer(side, false)}
            onKeyDown={this.toggleDrawer(side, false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Button onClick={this.toggleDrawer("left", true)}>
                    Open Left
                </Button>
                <Drawer
                    open={this.state.left}
                    onClose={this.toggleDrawer("left", false)}
                >
                    {this.sideList("left")}
                </Drawer>
            </div>
        );
    }
}

export default Home;
