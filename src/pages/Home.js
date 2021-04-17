import React, { Component } from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import {ModalCard} from "../components/ModalCard";


class Home extends Component {

  render() {
    return (
      <Row style={{margin: '0'}}>
        <Col lg={2}>
          <Card style={{ marginLeft: "1.25em", float: "left" }}>
            <Card.Img src="https://i.imgur.com/2dxLX1V.jpg" />
          </Card>
        </Col>
        <Col lg={2}>
          <Card>
            <Card.Text>hello</Card.Text>
          </Card>
        </Col>
        <Col lg={2}>
          <Card>
            <Card.Img src="https://i.imgur.com/vYNZiEz.jpg" />
          </Card>
        </Col>
        <Col lg={2}>
          <Card>
            <Card.Text>hello</Card.Text>
          </Card>
        </Col>
        <Col lg={2}>
          <Card style={{ textAlign: "center" }} fluid>
            <a
              style={{ color: "gray", fontSize: 10 }}
              type="application/pdf"
              rel="noreferrer"
              target="_blank"
              href="https://pdfhost.io/v/4ExQmXzuh_resumeRDpdf.pdf"
              download="David-V-Eldridge-Resume"
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
}

export default Home;