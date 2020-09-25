import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import SearchBar from "../SearchBar";

class Navigation extends Component {
    state = {
        inputValue: [],
        inputArray: []
    }

    // Navbar functions
    searchBarOnChange = event => {
        // console.log("onChange is working: ", event.target.value);
        
        this.setState({
            inputValue: event.target.value
        })
        console.log(this.state.inputValue)
    }

    // On SearchIcon submit, take the value in the search bar and put it into an array
        // Then take that array and filter the site based on value

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
                <SearchBar 
                    inputValue={this.state.inputValue}
                    onChange={this.searchBarOnChange} />
            </Navbar>
        );
    }
}

export default Navigation;
