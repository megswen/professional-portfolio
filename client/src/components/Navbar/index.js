import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import SearchBar from "../SearchBar";

class Navigation extends Component {
    // Navbar functions

    render() {
        return (
            <Navbar>
                <Navbar.Brand>MS</Navbar.Brand>
                <Nav className="nav nav-tabs mr-auto">
                    <NavLink to="/" className={window.location.pathname === "/" ? "active navlink" : "navlink"}>
                        h o m e
                    </NavLink>
                    <NavLink to="/portfolio" className={window.location.pathname === "/portfolio" ? "active" : "navlink"}>
                        p o r t f o l i o
                    </NavLink>
                    <NavLink to="/about" className={window.location.pathname === "/about" ? "active" : "navlink"}>
                        a b o u t
                    </NavLink>
                    <NavLink to="/contact" className={window.location.pathname === "/contact" ? "active" : "navlink"}>
                        c o n t a c t
                    </NavLink>
                </Nav>
                <SearchBar />
            </Navbar>
        );
    }
}

export default Navigation;
