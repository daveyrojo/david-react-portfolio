import React, { Component, useState } from "react";
import { Container, Button, Collapse, Card } from "react-bootstrap";
import AboutMeCard from "../components/AboutMeCard"
import images from "../images.json";

//Probably need to import react-transition-group
function AboutMe() {
  
  const photos = images;

  const [open, setOpen] = useState(false);

  const [click, setClick] = useState("Click Here to Meet Me!");

  const expandAboutMe = () => {
    setOpen(!open);
    setClick("I've Been Clicked!")
  };

  return (
    <div>
      <Container>
        <Button
          bg="primary"
          onClick={expandAboutMe}
          aria-controls="collapse"
          aria-expanded={open}
          centered
        >
          {click}
        </Button>
      </Container>
      <Collapse in={open}>
        <div id="collapse">
          <AboutMeCard />
        </div>
      </Collapse>
    </div>
  );
}

export default AboutMe;
