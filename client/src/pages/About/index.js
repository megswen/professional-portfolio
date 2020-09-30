import React, { Component } from "react";
import "./style.css";
import Navigation from "../../components/Navbar";
import AboutBackground from "../../components/AboutBackground";
import Footer from "../../components/Footer";

class About extends Component {
    state = {
        
    };

    // Functions for about page

    render() {
        return (
            <>
                <Navigation />
                <AboutBackground />
                {/* <Footer /> */}
            </>
        );
    }
}

export default About;