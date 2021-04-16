
import React, {  useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import Contact from "../Contact";
import Images from "../../images.json";


export function ModalCard() {

  const [show, setShow] = useState('false');

  const handleClose = () => setShow(false);

    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hey! It's So Nice To Meet You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card fluid>
            Welcome to my online portfolio! To make this convenient right here
            is all of my resume and contact:
            <Card.Img
              src={Images[1].img}
              width="100"
              height="auto"
              fluid
              roundedCircle
            />
            <Card.Img src="https://i.imgur.com/66uKXXn.jpg" fluid />
            <Contact />
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Take A Closer Look!
          </Button>
        </Modal.Footer>
      </Modal>
    );
}



// export default render(<ModalCard/>);
