import React from "react";
import "./style.css";
import * as ReactBootstrap from "react-bootstrap";

function PageHeader(props) {
    return (
        <ReactBootstrap.Row>
            <ReactBootstrap.Col>
                <h1 className="page-header text-center">{props.header}</h1>
                <div className="page-subheader text-center">{props.subheader}</div>
            </ReactBootstrap.Col>
        </ReactBootstrap.Row>
    );
}

export default PageHeader;