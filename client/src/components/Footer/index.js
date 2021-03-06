import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    
    render() {
        return (
            <footer className="footer container-fluid text-center pt-3 pb-3">
                <a href="https://www.linkedin.com/in/mmbswenson/"><i className="fa fa-linkedin fa-footer fa-lg"></i></a>
                <a href="mailto:mmbswenson@gmail.com"><i className="fa fa-envelope fa-footer fa-lg"></i></a>
                <a href="https://github.com/megswen"><i className="fa fa-git fa-footer fa-lg"></i></a>
            </footer>
        );
    }
}

export default Footer;