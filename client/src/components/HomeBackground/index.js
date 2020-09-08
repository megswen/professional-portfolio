import React, { Component } from "react";
import "./style.css";
import HomeButton from "../HomeButton";

class HomeBackground extends Component {
    // Function for handling button click
    state = {
       
    };

    // WORKING ON THESE
    goToPortfolio = () => {

    }

    handleButtonClick = event => {
        event.preventDefault();

    }


    render() {
        const buttonStyle = {
            color: "white",
            backgroundColor: "rgb(238, 184, 206)",
            padding: "15px 25px 15px 25px",
            marginTop: "500px",
            // marginRight: "400px", ALSO CHANGE COL-LG-12 TO TEXT-RIGHT
            border: "none",
            borderRadius: "30px",
            boxShadow: "0.5px 0.5px 5px gray",
            textShadow: "1px 1px 5px gray",
        };

        return (
            <div className="home-background container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <HomeButton 
                            onClick={this.handleButtonClick}
                            style={buttonStyle}
                            text="my portfolio"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBackground;