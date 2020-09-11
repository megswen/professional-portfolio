import React from "react";
import "./style.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import MyButton from "../MyButton";

function MyCard(props) {
    return (
        <Card 
            className={props.className}
            style={props.cardStyle}
        >
            <Card.Img 
                // variant="top" 
                src={props.image} 
                style={props.imageStyle}
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <MyButton 
                    text={props.buttonText}
                    style={props.buttonStyle}
                    onClick={props.onClick}
                />
            </Card.Body>
        </Card>
    );
}

export default MyCard;
