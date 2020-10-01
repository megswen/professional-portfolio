import React, { Component } from "react";
import "./style.css";
import Navigation from "../../components/Navbar";
import ContactBackground from "../../components/ContactBackground";
import Footer from "../../components/Footer";

class Contact extends Component {
    state = {
        
    };

    // Functions for about page

    render() {
        return (
            <>
                <Navigation />
                <ContactBackground />
                {/* <Footer /> */}
            </>
        );
    }
}

export default Contact;