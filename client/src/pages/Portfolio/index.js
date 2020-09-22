import React, { Component } from "react";
import "./style.css";
import Navigation from "../../components/Navbar";
import PortfolioBackground from "../../components/PortfolioBackground";
import Footer from "../../components/Footer";

class Portfolio extends Component {
    state = {
        
    };

    // Functions for portfolio page

    render() {
        return (
            <>
                <Navigation />
                <PortfolioBackground />
                <Footer />
            </>
        );
    }
}

export default Portfolio;