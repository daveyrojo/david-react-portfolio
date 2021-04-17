import React from "react";
import { Row } from "react-bootstrap";
import Projects from "../projects.json";
import { AllProjects } from "../components/Project";


class Project extends React.Component {
  state= {
    Projects,
  }

  render() {
    return (
      <div style={{ marginLeft: 75 }}>
        <Row>
          {this.state.Projects.map(project => ( 
          <AllProjects project={project} />
          ))}
        </Row>
      </div>
    );
    }

};

export default Project;