import React, { Component } from "react";
import "./style.css";
import PageHeader from "../PageHeader";
import { Card } from "react-bootstrap";
import MyButton from "../MyButton";


class PortfolioBackground extends Component {
    

    render() {
        const portfolioButtonStyle = {
            color: "white",
            backgroundColor: "rgb(192, 117, 180)",
            padding: "15px 25px 15px 25px",
            marginTop: "250px",
            // marginRight: "400px", ALSO CHANGE COL-LG-12 TO TEXT-RIGHT
            border: "none",
            borderRadius: "30px",
            boxShadow: "0.5px 0.5px 5px darkgray",
            textShadow: "1px 1px 5px gray",
            fontFamily: "'Raleway', sans-serif"
        };

        return (
            <div className="portfolio-background container-fluid">
                <PageHeader
                    header="Portfolio"
                />
                <div className="row">
                    <div className="col-lg-12 text-center">
                        {/* Cards with portfolio pics here */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>My Project</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <MyButton 
                                    text="Check It Out"
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioBackground;