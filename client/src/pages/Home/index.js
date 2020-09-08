import React, { Component } from "react";
import "./style.css";
import Button from "react-bootstrap";
import Navigation from "../../components/Navbar";
import HomeBackground from "../../components/HomeBackground";

class Home extends Component {
    state = {
        
    };

    // Functions for home page

    render() {
        return (
            <>
                <Navigation />
                <HomeBackground />
            </>
        );
    }
}

export default Home;