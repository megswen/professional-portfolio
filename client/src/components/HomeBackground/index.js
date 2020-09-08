import React, { Component } from "react";
import "./style.css";
import HomeButton from "../HomeButton";

class HomeBackground extends Component {
    // Function for handling button click


    render() {
        return (
            <div className="home-background container-fluid text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <HomeButton 
                            text="portfolio"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBackground;