import React from "react";
import { Route } from "react-router-dom";
import { Container, Card, Image } from "react-bootstrap";

import "./style.css";

function Project(props) {
  return (
    <Container>
      <Image
        src={props.Projects.image}
        rounded
        fluid
      />
      <Card.Text>
        {props.Projects.description}
      </Card.Text>
      <a style={{color: "primary"}} href={props.Projects.url}>
        {props.Projects.title}
      </a>
      
    </Container>
  );
}

export default Project;
