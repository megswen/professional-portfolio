import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import "./style.css";

class Navigation extends Component {
    // Navbar functions

    render() {
        return (
            <Navbar>
                <Navbar.Brand>MS</Navbar.Brand>
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
                <InputGroup className="mb-3 search-box">
                    <FormControl
                        placeholder="s e a r c h"
                        aria-label="searchbox"
                        aria-describedby="search"
                        className="search-form"
                    />
                    <Button id="search" className="btn">Search</Button>
                </InputGroup>
            </Navbar>
        );
    }
}

export default Navigation;
