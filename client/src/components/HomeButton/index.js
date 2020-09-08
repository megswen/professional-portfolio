import React from "react";
import "./style.css";
import * as ReactBootstrap from "react-bootstrap";

function HomeButton(props) {
    return (
        <ReactBootstrap.Button 
            className="home-btn btn-lg"
            // onClick={props.onClick}
            // text={props.text}
        />
    );
}

export default HomeButton;