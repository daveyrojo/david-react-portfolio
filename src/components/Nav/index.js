import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, Location } from 'react-router-dom';
import './style.css';

class NavBar extends Component {

    render() {
      return (
        <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
          <Container>
            <Navbar.Brand>David Eldridge.</Navbar.Brand>
            <Nav.Link href="#">Home.</Nav.Link>
            <Nav.Link href="#">About Me.</Nav.Link>
            <Nav.Link href="#">Projects.</Nav.Link>
          </Container>
        </Navbar>
      );
    }

}

export default NavBar;