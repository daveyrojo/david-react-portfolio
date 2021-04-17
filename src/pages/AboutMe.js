import React from "react";
import { Row, Container, Card, Col } from "react-bootstrap";
import AboutMeCard from "../components/AboutMeCard";
import Project from "../components/Project";
import Projects from "../projects.json";

function AboutMe() {
  
  const projects = Object.values(Projects);
  const randomProject = projects[parseInt(Math.random() * projects.length)];
  

  return (
    <div>
      <Container id="collapse">
        <Row>
          <Col>
            <Card.Title>Nice to meet you as well!</Card.Title>
            <AboutMeCard />
          </Col>
          <Col>
            <Card.Title>{randomProject.title}</Card.Title>
            <Project Projects={randomProject} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
