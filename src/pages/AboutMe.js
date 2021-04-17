import React from "react";
import { Row, Container, Card, Col } from "react-bootstrap";
import AboutMeCard from "../components/AboutMeCard";
import { RandomProject } from "../components/Project";
import Projects from "../projects.json";


function AboutMe() {
 
  const projects = Object.values(Projects);
  const randomProject = projects[parseInt(Math.random() * projects.length)];

  return (
    <div>
      <Container id="collapse">
        <Row>
          <Col lg={6}>
            <AboutMeCard />
          </Col>
          <Col lg={6}>
            <RandomProject project={randomProject} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
