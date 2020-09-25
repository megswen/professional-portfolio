import React, { Component } from "react";
import "./style.css";
import Navigation from "../../components/Navbar";
import HomeBackground from "../../components/HomeBackground";
import Footer from "../../components/Footer";

class Home extends Component {
    state = {
        
    };

    // Functions for home page

    render() {
        const footerStyle = {
            position: "fixed"
        }

        return (
            <>
                <Navigation />
                <HomeBackground />
            </>
        );
    }
}

export default Home;