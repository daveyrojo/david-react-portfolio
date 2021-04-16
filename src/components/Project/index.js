import React from "react";
import { Container, Card, Image } from "react-bootstrap";

import "./style.css";

function Project(props) {
  return (
    <Container>
      <Image
        height="150"
        width="150"
        variant="top"
        src={props.Projects.image}
        rounded
        fluid
      />
      <Card.Text>{props.Projects.description}</Card.Text>
      <a style={{ color: "primary" }} href={props.Projects.url}>
        {props.Projects.title}
      </a>
    </Container>
  );
}

export default Project;
