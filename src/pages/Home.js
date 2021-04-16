import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {ModalCard} from "../components/ModalCard";
import Project from "../components/Project";
import Projects from "../projects.json";


class Home extends Component {
  state = {
    Projects,
  }

  render() {
    return (
      <Container>
        <ModalCard />
        <Row large={3} medium={4} small={12}>
          <Col>
          {this.state.Projects.map(Proj => (
            <Project Projects={Proj} />
          ))};
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;