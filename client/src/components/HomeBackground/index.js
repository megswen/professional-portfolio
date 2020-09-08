import React, { Component } from "react";
import "./style.css";
import HomeButton from "../HomeButton";

class HomeBackground extends Component {
    // Function for handling button click


    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "green",
            padding: "10px",
            fontFamily: "Arial",
            zIndex: "3",
            margin: "200px"
        };

        return (
            <div className="home-background container-fluid">
                <div className="row">
                    <div className="col-lg-12 d-flex">
                        <HomeButton 
                            text="this is a test"
                            style={mystyle}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBackground;