import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand><Nav.Link style={{color: 'white'}} className="brand" href="/">David Eldridge.</Nav.Link></Navbar.Brand>
          <Nav.Link style={{color: 'primary'}} href="/">Home.</Nav.Link>
          <Nav.Link style={{color: 'green'}} href="/aboutme">About Me.</Nav.Link>
          <Nav.Link style={{color: 'primary'}} href="/projects">Projects.</Nav.Link>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
