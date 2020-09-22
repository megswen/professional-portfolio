import React from 'react';
import './style.css';
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row>
                <a href="https://www.linkedin.com/in/megan-swenson-1b41581a2/"><i class="fa fa-linkedin fa-footer fa-lg"></i></a>
                <a href="mailto:mrsmeganswenson@gmail.com"><i class="fa fa-envelope fa-footer fa-lg"></i></a>
                <a href="https://github.com/megswen"><i class="fa fa-git fa-footer fa-lg"></i></a>
            </Row>
        </Container>
        <Container>
            <Row>
                
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;