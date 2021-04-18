
import React, {  useState, useEffect } from "react";
import { Card, Button, Modal, Row, Col } from "react-bootstrap";
import Images from "../../images.json";


export function ModalCard() {

  const [show, setShow] = useState(true);

  useEffect(() => {
    let userVisited = sessionStorage.getItem('visited');
    if (userVisited) {
      setShow(false);
    }
  }, [])
  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem('visited', 'true')
  }

    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        animation
      >
        <Modal.Header>
          <Modal.Title style={{ marginLeft: 80 }}>
            Hey! It's So Nice To Meet You!
          </Modal.Title>
        </Modal.Header>

        <Card style={{ textAlign: "center" }} fluid>
          Welcome to my online portfolio!
          <Card.Text>
            To make this convenient right here is all of my resume and contact:
          </Card.Text>
          <Row style={{ justifyContent: "flex", marginBottom: 15 }}>
            <Card.Img
              src={Images[1].img}
              style={{
                width: 240,
                height: 300,
                marginRight: 10,
                paddingLeft: 25,
              }}
              fluid
              roundedCircle
            />

            <Col>
              <a 
                style={{ color: "gray", fontSize: 10 }}
                type="application/pdf"
                rel="noreferrer"
                target="_blank"
                href="https://pdfhost.io/v/4ExQmXzuh_resumeRDpdf.pdf"
                download="David-V-Eldridge-Resume"
              >
                <Card.Img className="resumeLink"
                  style={{ width: 240, height: 300 }}
                  src="https://i.imgur.com/66uKXXn.jpg"
                  fluid
                />
                Click to Download
              </a>
            </Col>
          </Row>
        </Card>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button variant="primary" onClick={handleClose} center>
            Take A Closer Look!
          </Button>
        </Modal.Footer>
      </Modal>
    );
}



// export default render(<ModalCard/>);
