import React from "react";
import { Container, Card, Image, Col, Row } from "react-bootstrap";
import Projects from "../../projects.json"
import "./style.css";

export function RandomProject(props) {
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

export function AllProjects() {
  
  return (
    <Row>
      <Card style={{ vh: 10, justifyContent: "left" }}>
        <Col style={{ justifyContent: "left" }}>
          <h5 style={{ color: "primary" }}>
            <a href={Projects[0].url}>{Projects[0].title}</a>
          </h5>
          <Image
            style={{ marginRight: 5 }}
            height="150"
            width="150"
            variant="top"
            src={Projects[0].image}
            rounded
            fluid
          />
          <p
            style={{
              textAlign: "center",
              width: 150,
              fontSize: 12,
            }}
          >
            {Projects[0].description}
          </p>
          <br></br>
          <br></br>
          <Col style={{ justifyContent: "left" }}>
            <h5 style={{ color: "primary" }}>
              <a href={Projects[1].url}>{Projects[1].title}</a>
            </h5>
            <Image
              style={{ marginRight: 5 }}
              height="150"
              width="150"
              variant="top"
              src={Projects[1].image}
              rounded
              fluid
            />
            <p
              style={{
                textAlign: "center",
                width: 150,
                fontSize: 12,
              }}
            >
              {Projects[1].description}
            </p>
          </Col>
        </Col>
      </Card>
      <Card style={{ vh: 10, justifyContent: "left" }}>
        <Col style={{ justifyContent: "left" }}>
          <h5 style={{ color: "primary" }}>
            <a href={Projects[0].url}>{Projects[0].title}</a>
          </h5>
          <Image
            style={{ marginRight: 5 }}
            height="150"
            width="150"
            variant="top"
            src={Projects[0].image}
            rounded
            fluid
          />
          <p
            style={{
              textAlign: "center",
              width: 150,
              fontSize: 12,
            }}
          >
            {Projects[0].description}
          </p>
          <br></br>
          <br></br>
          <Col style={{ justifyContent: "left" }}>
            <h5 style={{ color: "primary" }}>
              <a href={Projects[1].url}>{Projects[1].title}</a>
            </h5>
            <Image
              style={{ marginRight: 5 }}
              height="150"
              width="150"
              variant="top"
              src={Projects[1].image}
              rounded
              fluid
            />
            <p
              style={{
                textAlign: "center",
                width: 150,
                fontSize: 12,
              }}
            >
              {Projects[1].description}
            </p>
          </Col>
        </Col>
      </Card>
      <Card style={{ vh: 10, justifyContent: "left" }}>
        <Col style={{ justifyContent: "left" }}>
          <h5 style={{ color: "primary" }}>
            <a href={Projects[0].url}>{Projects[0].title}</a>
          </h5>
          <Image
            style={{ marginRight: 5 }}
            height="150"
            width="150"
            variant="top"
            src={Projects[0].image}
            rounded
            fluid
          />
          <p
            style={{
              textAlign: "center",
              width: 150,
              fontSize: 12,
            }}
          >
            {Projects[0].description}
          </p>
          <br></br>
          <br></br>
          <Col style={{ justifyContent: "left" }}>
            <h5 style={{ color: "primary" }}>
              <a href={Projects[1].url}>{Projects[1].title}</a>
            </h5>
            <Image
              style={{ marginRight: 5 }}
              height="150"
              width="150"
              variant="top"
              src={Projects[1].image}
              rounded
              fluid
            />
            <p
              style={{
                textAlign: "center",
                width: 150,
                fontSize: 12,
              }}
            >
              {Projects[1].description}
            </p>
          </Col>
        </Col>
      </Card>
      <Card style={{ vh: 10, justifyContent: "left" }}>
        <Col style={{ justifyContent: "left" }}>
          <h5 style={{ color: "primary" }}>
            <a href={Projects[0].url}>{Projects[0].title}</a>
          </h5>
          <Image
            style={{ marginRight: 5 }}
            height="150"
            width="150"
            variant="top"
            src={Projects[0].image}
            rounded
            fluid
          />
          <p
            style={{
              textAlign: "center",
              width: 150,
              fontSize: 12,
            }}
          >
            {Projects[0].description}
          </p>
          <br></br>
          <br></br>
          <Col style={{ justifyContent: "left" }}>
            <h5 style={{ color: "primary" }}>
              <a href={Projects[1].url}>{Projects[1].title}</a>
            </h5>
            <Image
              style={{ marginRight: 5 }}
              height="150"
              width="150"
              variant="top"
              src={Projects[1].image}
              rounded
              fluid
            />
            <p
              style={{
                textAlign: "center",
                width: 150,
                fontSize: 12,
              }}
            >
              {Projects[1].description}
            </p>
          </Col>
        </Col>
      </Card>
      <Card style={{ vh: 10, justifyContent: "left" }}>
        <Col style={{ justifyContent: "left" }}>
          <h5 style={{ color: "primary" }}>
            <a href={Projects[0].url}>{Projects[0].title}</a>
          </h5>
          <Image
            style={{ marginRight: 5 }}
            height="150"
            width="150"
            variant="top"
            src={Projects[0].image}
            rounded
            fluid
          />
          <p
            style={{
              textAlign: "center",
              width: 150,
              fontSize: 12,
            }}
          >
            {Projects[0].description}
          </p>
          <br></br>
          <br></br>
          <Col style={{ justifyContent: "left" }}>
            <h5 style={{ color: "primary" }}>
              <a href={Projects[1].url}>{Projects[1].title}</a>
            </h5>
            <Image
              style={{ marginRight: 5 }}
              height="150"
              width="150"
              variant="top"
              src={Projects[1].image}
              rounded
              fluid
            />
            <p
              style={{
                textAlign: "center",
                width: 150,
                fontSize: 12,
              }}
            >
              {Projects[1].description}
            </p>
          </Col>
        </Col>
      </Card>
    </Row>
  );
}




