import React, { Component } from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import MyButton from "../MyButton";

function MyCard(props) {
    return (
        <Card 
            style={props.style}
            className={props.className}
        >
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <MyButton 
                    text={props.text}
                    style={props.style}
                />
            </Card.Body>
        </Card>
    );
}

export default MyCard;
