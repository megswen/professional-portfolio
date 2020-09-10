import React, { Component } from "react";
import "./style.css";
import PageHeader from "../PageHeader";
import MyCard from "../MyCard";
import rockfish from "../../assets/images/rockfish.png";


class PortfolioBackground extends Component {
    

    render() {
        const portfolioCardStyle = {
            backgroundColor: "white",
            color: "gray",
            margin: "50px",
            width: "600px"
        };

        const portfolioImageStyle = {
            backgroundSize: "cover",
            top: "0",
            padding: "0",
            width: "600px",
            height: "auto"

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
                        <MyCard 
                            // className="portfolio-card"
                            cardStyle={portfolioCardStyle}
                            image={rockfish}
                            imageStyle={portfolioImageStyle}
                            className="img-fluid"
                            title="Project"
                            description="This is my project"
                            buttonText="VIEW WEBSITE"
                            buttonStyle={portfolioButtonStyle}
                            // onClick={}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioBackground;