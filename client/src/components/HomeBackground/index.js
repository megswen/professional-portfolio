import React, { Component } from "react";
import "./style.css";
import MyButton from "../MyButton";
import PageHeader from "../PageHeader";
import history from "../../history.js";


class HomeBackground extends Component {
    // Function for handling button click
    state = {
        button: "",
        isClicked: "false"
    };

    goToPortfolio = event => {
        event.preventDefault();
        // history.push("/portfolio");
        console.log("PORTFOLIO BUTTON WORKS");
    }

    render() {
        const homeButtonStyle = {
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
            <div className="home-background container-fluid">
                <div className="home-cover container-fluid text-center">
                    <PageHeader
                        header="Hi, I'm Megan"
                        subheader="Full-stack web developer"
                    />
                    <MyButton 
                        text="MY PORTFOLIO"
                        style={homeButtonStyle}
                        onClick={this.goToPortfolio}
                    />
                </div>
            </div>
        );
    }
}

export default HomeBackground;