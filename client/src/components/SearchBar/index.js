import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./style.css";
import SearchIcon from "../SearchIcon";

function SearchBar(props) {
    return (
        <>
            <SearchIcon />
            <Form className="form-inline search-form">
                <input className="form-control search-input form-control-sm ml-3 w-75" 
                    type="text" 
                    value={props.inputValue} 
                    onChange={props.onChange} 
                    placeholder="search" 
                    aria-label="Search"></input>
            </Form>
        </>
    );
}

export default SearchBar;