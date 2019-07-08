// import React from "react";
// import { Link } from "react-router-dom";

// export default class AppWrapper extends React.Component {
//     render() {
//         return (
//             <html>
//                 <div className="landing-component">
//                     <Link to={"/home"}>home</Link>
//                 </div>
//             </html>
//         );
//     }
// }

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

class MyRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" render={props => <MyComponent {...props} />} />
            </BrowserRouter>
        );
    }
}

class ParentComponent extends React.Component {
    render() {
        return <ChildComponent {...this.props} />;
    }
}

class ChildComponent extends React.Component {
    redirectToTarget = () => {
        this.props.history.push(`/target`);
    };
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <button onClick={this.redirectToTarget}>Redirect</button>
            </div>
        );
    }
}
