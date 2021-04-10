import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
// import { Link, Location } from 'react-router-dom';
import "./style.css";

//footer card has rounded corners - do not want them rounded
//Border needs to be wider
class Footer extends Component {
    render() {
        return (
          <Card border="primary" bg="dark" fixed="bottom">
            <Container>
              <Card.Body></Card.Body>
            </Container>
          </Card>
        );
    }
}

export default Footer;
