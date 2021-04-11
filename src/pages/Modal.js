import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Images from "../images.json"

function Modal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Hey It's So Nice To Meet You!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Welcome to my online portfolio! To make this convenient right here is all of my info:
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Take A Closser Look!
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
   
}

export default Modal;