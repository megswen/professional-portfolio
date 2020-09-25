import React, { Component } from "react";
import "./style.css";
import PageHeader from "../PageHeader";
import MyCard from "../MyCard";

class AboutBackground extends Component {
    

    render() {
        const portfolioHeaderStyle = {
            color: "gray"
        };

        const portfolioCardStyle = {
            backgroundColor: "rgb(236, 235, 235)",
            color: "gray",
            margin: "50px",
            width: "500px",
            display: "inline-block",
            boxShadow: "2px 2px 10px darkgray"
        };

        const portfolioImageStyle = {
            backgroundSize: "cover",
            top: "0",
            padding: "0",
            width: "500px",
            height: "auto",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"

        };

        const portfolioButtonStyle = {
            color: "white",
            backgroundColor: "rgb(44, 44, 44)",
            padding: "10px 20px 10px 20px",
            border: "none",
            borderRadius: "30px",
            boxShadow: "0.5px 0.5px 5px darkgray",
            textShadow: "1px 1px 5px gray",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "15px",
            margin: "15px 15px 0px 15px"
        };

        return (
            <div className="portfolio-background container-fluid">
                <PageHeader
                    header="ABOUT"
                    style={portfolioHeaderStyle}
                />
                <div className="row">
                    <div className="col-lg-12 justify-content-center">
                        Info goes here
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutBackground;