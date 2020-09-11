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

    // WORKING ON THESE 9/8
    // goToPortfolio = () => {

    // }

    // handleButtonClick = event => {
    //     event.preventDefault();
    //     // if (this.state.button)
    // }

    goToPortfolio = event => {
        event.preventDefault();
        history.push("/portfolio");
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
                <div className="home-cover container-fluid">
                    <PageHeader
                        header="Hi, I'm Megan"
                        subheader="Full-stack web developer"
                    />
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <MyButton 
                                onClick={this.goToPortfolio}
                                style={homeButtonStyle}
                                text="MY PORTFOLIO"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBackground;