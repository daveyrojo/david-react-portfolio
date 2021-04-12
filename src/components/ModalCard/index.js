
import React, {  useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import Contact from "../Contact";
import Images from "../../images.json";


function ModalCard() {

  const [show, setShow] = useState('true');

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
        <Card fluid>
          <Modal.Body>
            Welcome to my online portfolio! To make this convenient right here
            is all of my resume and contact:
            <Card.Image src={Images[1].img} width="100" height="auto" fluid roundedCircle />
            <Card.Image src="https://i.imgur.com/66uKXXn.jpg" fluid />
            <Contact />
          </Modal.Body>
        </Card>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Take A Closer Look!
          </Button>
        </Modal.Footer>
      </Modal>
   
  );
}



export default ModalCard;
