import React, { Component, useState } from "react";
import { Row, Container, Button, Collapse, Card, Col } from "react-bootstrap";
import AboutMeCard from "../components/AboutMeCard";
import Project from "../components/Project";
import Projects from "../projects.json";

//Probably need to import react-transition-group
function AboutMe() {
  const [open, setOpen] = useState(false);

  const [click, setClick] = useState("Click Here to Meet Me!");

  const expandAboutMe = () => {
    setOpen(!open);
    setClick("I've Been Clicked!");
  };

  return (
    <div>
      <Button
        bg="primary"
        onClick={expandAboutMe}
        aria-controls="collapse"
        aria-expanded={open}
      >
        {click}
      </Button>

      <Collapse in={open}>
        <Container id="collapse">
          <Row>
            <Col>
              <Card.Title>Nice to meet you as well!</Card.Title>
              <AboutMeCard />
            </Col>
            <Col>
              <Card.Title>{Projects[0].title}</Card.Title>
              <Project Projects={Projects} />
            </Col>
          </Row>
        </Container>
      </Collapse>
    </div>
  );
}

export default AboutMe;
