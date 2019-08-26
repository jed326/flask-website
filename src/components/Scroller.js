import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller"; // For some reason this imports babel-polyfill

import Landing from "./Landing";

class Scroller extends Component {
    goToPage = pageNumber => {
        this.reactPageScroller.goToPage(pageNumber);
    };

    render() {
        return (
            <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
                <Landing />
                <div>Bio Will Go Here</div>
                <div>Resume Will Go Here</div>
                <div>Link to Labs Will Go Here</div>
            </ReactPageScroller>
        );
    }
}

export default Scroller;
