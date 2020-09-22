import React from "react";
import "./style.css";
import * as ReactBootstrap from "react-bootstrap";

function MyButton(props) {
    return (
        <ReactBootstrap.Button 
            className="home-btn btn-lg"
            onClick={props.onClick.bind(this)}
            style={props.style}>
                {props.text}
        </ReactBootstrap.Button>
    );
}

export default MyButton;