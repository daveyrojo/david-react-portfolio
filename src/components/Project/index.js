import React from "react";
import { Card, Col } from "react-bootstrap";
import "./style.css";

export function RandomProject(props) {
  return (
      <Card className="projCard">
        <Card.Title className="cardTitle">
          <a href={props.project.url}>{props.project.title}</a>
        </Card.Title>
        <Card.Img
          className="projImg"
          variant="top"
          src={props.project.image}
          rounded
          fluid
        />
        <Card.Text>{props.project.description}</Card.Text>
      </Card>
  );
}

export function AllProjects(props) {
  
  return (
    
        <Col lg={3} md={6} sm={12}>
          <Card className="projCard">
            <Card.Title className="cardTitle">
              <a href={props.project.url}>{props.project.title}</a>
            </Card.Title>
            <Card.Img className="projImg"
              variant="top"
              src={props.project.image}
              rounded
              fluid
            />
            <Card.Text>{props.project.description}</Card.Text>
          </Card>
        </Col>
        
  );
}




