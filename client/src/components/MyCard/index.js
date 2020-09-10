import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import MyButton from "../MyButton";

function MyCard(props) {
    return (
        <Card 
            className={props.className}
            style={props.cardStyle}
        >
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <MyButton 
                    text={props.buttonText}
                    style={props.buttonStyle}
                />
            </Card.Body>
        </Card>
    );
}

export default MyCard;