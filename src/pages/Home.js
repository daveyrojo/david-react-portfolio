import React, { useState } from "react";
import { Container, Button, Collapse, Card } from "react-bootstrap";
import AboutMeCard from "../components/AboutMeCard"

//Probably need to import react-transition-group
function Home() {
  const [open, setOpen] = useState(false);

  const expandHome = () => {
    setOpen(!open);
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
        Click Here to Meet Me!
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
