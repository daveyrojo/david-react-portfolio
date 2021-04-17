
import React, {  useState } from "react";
import { Card, Button, Modal, Row } from "react-bootstrap";
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
          <Modal.Title style={{ marginLeft: 80 }}>
            Hey! It's So Nice To Meet You!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ textAlign: "center" }} fluid>
            Welcome to my online portfolio!
            <Card.Text>
              To make this convenient right here is all of my resume and
              contact:
            </Card.Text>
            <Row style={{justifyContent: 'center', marginBottom: 50}}>
              <Card.Img
                src={Images[1].img}
                style={{ width: 200, height: 300, marginRight: 50 }}
                fluid
                roundedCircle
              />
              <Card.Img
                style={{ width: 200, height: 300 }}
                src="https://i.imgur.com/66uKXXn.jpg"
                fluid
              />
            </Row>
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
