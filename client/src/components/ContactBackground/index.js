import React, { Component } from "react";
import "./style.css";
import PageHeader from "../PageHeader";
import Footer from "../Footer";

class ContactBackground extends Component {
    

    render() {
        const contactHeaderStyle = {
            color: "pink"
        };

        return (
            <div className="contact-background container-fluid">
                <div className="row">
                    <div className="col-lg-6 justify-content-center"></div>
                    <div className="col-lg-6 contact-cover justify-content-center">
                        <PageHeader
                            header="CONTACT"
                            style={contactHeaderStyle}
                        />
                        <div className="contact-text text-center">
                            Contact form goes here.
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactBackground;