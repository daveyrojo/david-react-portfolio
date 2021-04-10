import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
// import { Link, Location } from 'react-router-dom';
import "./style.css";

//footer card has rounded corners - do not want them rounded

class Footer extends Component {
    render() {
        return (
          <Card bg="dark" fixed="bottom">
            <Container fluid>
              <Card.Body></Card.Body>
            </Container>
          </Card>
        );
    }
}

export default Footer;
