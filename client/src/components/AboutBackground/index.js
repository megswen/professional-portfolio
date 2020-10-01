import React, { Component } from "react";
import "./style.css";
import PageHeader from "../PageHeader";
import Footer from "../Footer";

class AboutBackground extends Component {
    

    render() {
        const aboutHeaderStyle = {
            color: "pink"
        };

        return (
            <div className="about-background container-fluid">
                <div className="row">
                    <div className="col-lg-6 about-cover justify-content-center">
                        <PageHeader
                            header="ABOUT"
                            style={aboutHeaderStyle}
                        />
                        <div className="about-text text-center">
                            About text goes here.
                        </div>
                    </div>
                    <div className="col-lg-6 justify-content-center"></div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default AboutBackground;