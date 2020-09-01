import React, { Component } from "react";
import { Navbar, Nav, InputGroup, Form, FormControl, Button } from "react-bootstrap";
import "./style.css";

class SearchBar extends Component {
    // SearchBar functions

    render() {
        return (
             <Form className="form-inline search-form">
                <span><i className="fas fa-search"></i></span>
                <input className="form-control search-input form-control-sm ml-3 w-75" type="text" placeholder="s e a r c h" aria-label="Search"></input>
            </Form>
        );
    }
}

export default SearchBar;