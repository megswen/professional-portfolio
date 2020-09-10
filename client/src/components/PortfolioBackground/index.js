import React, { Component } from "react";
import "./style.css";
import PageHeader from "../PageHeader";
import { Card } from "react-bootstrap";
import MyButton from "../MyButton";


class PortfolioBackground extends Component {
    

    render() {
        const portfolioCardStyle = {
            backgroundColor: "white",
            color: "gray",
            margin: "30px",
            width: "25rem"
        };

        const portfolioButtonStyle = {
            color: "white",
            backgroundColor: "rgb(192, 117, 180)",
            padding: "15px 25px 15px 25px",
            border: "none",
            borderRadius: "30px",
            boxShadow: "0.5px 0.5px 5px darkgray",
            textShadow: "1px 1px 5px gray",
            fontFamily: "'Raleway', sans-serif"
        };

        return (
            <div className="portfolio-background container-fluid">
                <PageHeader
                    header="PORTFOLIO"
                />
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <MyCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioBackground;