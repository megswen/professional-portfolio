import React from "react";
import "./style.css";
import * as ReactBootstrap from "react-bootstrap";

function PageHeader(props) {
    return (
        <ReactBootstrap.Row>
            <ReactBootstrap.Col>
                <h1 className="page-header text-center">{props.header}</h1>
                <h3 className="page-subheader text-center">{props.subheader}</h3>
            </ReactBootstrap.Col>
        </ReactBootstrap.Row>
    );
}

export default PageHeader;