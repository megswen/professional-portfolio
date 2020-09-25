import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

function SearchIcon(props) {
        return (
            <Button className="search-icon"
                type="submit"
                onSubmit={props.onSubmit}>
                <span>
                    <i className="fa fa-search light"></i>
                </span>
            </Button>
        );

}

export default SearchIcon;