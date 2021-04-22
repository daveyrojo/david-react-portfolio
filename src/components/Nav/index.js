import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand><Link style={{color: 'white'}} className="brand" to="/">David Eldridge.</Link></Navbar.Brand>
          <Link style={{color: 'primary'}} to="/">Home.</Link>
          <Link style={{color: 'green'}} to="/aboutme">About Me.</Link>
          <Link style={{color: 'primary'}} to="/projects">Projects.</Link>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
