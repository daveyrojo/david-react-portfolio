import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { AboutMeCard } from "../components/AboutMeCard";
import { RandomProject } from "../components/Project";
import Images from "../images.json";
import Projects from "../projects.json";

function AboutMe () {

    return (
      <Row style={{ margin: "0" }}>
        <Col lg={3}>
          <h5 style={{ textAlign: "center", marginTop: "2.5em" }}>Projects:</h5>
          <RandomProject project={Projects[0]} />
          <RandomProject project={Projects[1]} />
        </Col>
        <Col lg={6}>
          <h3 style={{ textAlign: "center", marginTop: "1.5em" }}>
            A Little Bit About Me:
          </h3>
          <AboutMeCard image={Images[2].img} text={Images[2].text} />
          <AboutMeCard image={Images[3].img} text={Images[3].text} />
        </Col>
        <Col lg={2}>
          <h5 style={{ textAlign: "center", marginTop: "2.5em" }}>Resume:</h5>
          <Card style={{ textAlign: "center" }} fluid>
            <a
              style={{ color: "gray", fontSize: 10 }}
              type="application/pdf"
              rel="noreferrer"
              target="_blank"
              href="https://pdfhost.io/v/4ExQmXzuh_resumeRDpdf.pdf"
            >
              <Card.Img
                className="resumeLink"
                style={{ width: 240, height: 300 }}
                src="https://i.imgur.com/66uKXXn.jpg"
                fluid
              />
              Click to Download
            </a>
          </Card>
        </Col>
      </Row>
    );
  }

export default AboutMe;
