import React, { useState } from "react";
import { Container, Button, Collapse, Card } from "react-bootstrap";
import AboutMeCard from "../components/AboutMeCard"

//Probably need to import react-transition-group
function Home() {
  const [open, setOpen] = useState(false);

  const [click, setClick] = useState("Click Here to Meet Me!");

  const expandHome = () => {
    setOpen(!open);
    setClick("I've Been Clicked!")
  };

  return (
    <Container>
      <Button
        bg="primary"
        onClick={expandHome}
        aria-controls="collapse"
        aria-expanded={open}
        centered
      >
        {click}
      </Button>
      <Collapse in={open}>
        <div id="collapse">
          <AboutMeCard />
        </div>
      </Collapse>
    </Container>
  );
}

export default Home;
