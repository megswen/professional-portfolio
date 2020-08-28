import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

class Navigation extends Component {
    // Navbar functions

    render() {
        return (
            <Navbar>
                <Navbar.Brand><i className="fab fa-pagelines"></i></Navbar.Brand>
                <Nav className="nav nav-tabs mr-auto">
                    <NavLink to="/" className={window.location.pathname === "/" ? "active navlink" : "navlink"}>
                        Home
                    </NavLink>
                    <NavLink to="/portfolio" className={window.location.pathname === "/portfolio" ? "active" : "navlink"}>
                        Portfolio
                    </NavLink>
                    <NavLink to="/about" className={window.location.pathname === "/about" ? "active" : "navlink"}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={window.location.pathname === "/contact" ? "active" : "navlink"}>
                        Contact
                    </NavLink>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
