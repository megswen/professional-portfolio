import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, InputGroup, Form, FormControl, Button } from "react-bootstrap";
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
                {/* <InputGroup className="mb-3 mt-3 search-box">
                    <FormControl
                        placeholder="s e a r c h"
                        aria-label="searchbox"
                        aria-describedby="search"
                        className="search-form"
                    />
                </InputGroup> */}
                
                {/* <Button id="search" className="btn search-btn">Search</Button> */}

                <Form className="form-inline search-form">
                    <i className="fas fa-search"></i>
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="search" aria-label="Search"></input>
                </Form>
            </Navbar>
        );
    }
}

export default Navigation;
