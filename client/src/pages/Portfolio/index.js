import React, { Component } from "react";
import "./style.css";
import Navigation from "../../components/Navbar";
import PortfolioBackground from "../../components/PortfolioBackground";

class Portfolio extends Component {
    state = {
        
    };

    // Functions for portfolio page

    render() {
        return (
            <>
                <Navigation />
                <PortfolioBackground />
            </>
        );
    }
}

export default Portfolio;