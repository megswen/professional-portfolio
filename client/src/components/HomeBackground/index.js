import React, { Component } from "react";
import "./style.css";
import HomeButton from "../HomeButton";

class HomeBackground extends Component {
    // Function for handling button click


    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "plum",
            padding: "15px 25px 15px 25px",
            zIndex: "3",
            marginTop: "400px",
            border: "none",
            borderRadius: "30px"
        };

        return (
            <div className="home-background container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <HomeButton 
                            text="my portfolio"
                            style={mystyle}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBackground;