import React from "react";
import { Row, Container, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import { RandomProject } from "../components/Project";

import Projects from "../projects.json";


function Home() {
 
  const projects = Object.values(Projects);
  const randomProject = projects[parseInt(Math.random() * projects.length)];

  return (
    <div>
      <Container id="collapse">
        <Row>
          <Col lg={5}>
            <HomeCard />
          </Col>
          <Col lg={5}>
            <h5 style={{ marginLeft: "1em", marginTop: "1em" }}>
              Here is a project from the projects page!
            </h5>
            <RandomProject project={randomProject} />
          </Col>
          <Col lg={2} style={{ align: "center" }}>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  paddingLeft: "4em",
                  marginTop: "1.5em",
                }}
              >
                My Resume:
              </p>
              <Link
                style={{ color: "gray", fontSize: 10 }}
                type="application/pdf"
                rel="noreferrer"
                target="_blank"
                href="https://pdfhost.io/v/4ExQmXzuh_resumeRDpdf.pdf"
              >
                <Card.Img
                  className="resumeLink"
                  style={{ width: 300, height: 400 }}
                  src="https://i.imgur.com/66uKXXn.jpg"
                  fluid
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
