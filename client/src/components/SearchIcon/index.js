import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

class SearchIcon extends Component {
    // SearchIcon functions

    render() {
        return (
            <Button className="search-icon">
                <span>
                    <i className="fa fa-search light"></i>
                </span>
            </Button>
        );
    }
}

export default SearchIcon;