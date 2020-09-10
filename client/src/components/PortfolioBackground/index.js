import React, { Component } from "react";
import "./style.css";
import PageHeader from "../PageHeader";
import MyCard from "../MyCard";
import rockfish from "../../assets/images/rockfish.png";


class PortfolioBackground extends Component {
    

    render() {
        const rockfishCardStyle = {
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
            height: "auto",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"

        };

        const portfolioButtonStyle = {
            color: "white",
            backgroundColor: "rgb(192, 117, 180)",
            padding: "15px 25px 15px 25px",
            border: "none",
            borderRadius: "30px",
            boxShadow: "0.5px 0.5px 5px darkgray",
            textShadow: "1px 1px 5px gray",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "15px",
            margin: "15px"
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
                            cardStyle={rockfishCardStyle}
                            image={rockfish}
                            imageStyle={portfolioImageStyle}
                            className="img-fluid"
                            title="ROCKFISH CONSERVATION"
                            description="An app to help fishermen on the Pacific Coast identify endangered species of Rockfish and educate 
                            them on safe release methods to preserve those species."
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