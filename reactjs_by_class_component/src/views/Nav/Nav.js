import React from "react";
import './Nav.scss';
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/myComponent">MyComponent</Link> */}
                <NavLink exact="true" to="/" activeclassname="active">Home</NavLink>
                <NavLink exact="true" to="/todo" activeclassname="active">Todo</NavLink>
                <NavLink exact="true" to="/myComponent" activeclassname="active">MyComponent</NavLink>
                <NavLink exact="true" to="/user" activeclassname="active">User</NavLink>
            </div>
        )
    }
};
export default Nav;