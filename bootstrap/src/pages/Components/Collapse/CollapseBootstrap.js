import { useState } from "react";
import { Row, Col, Card, Button, Collapse, Nav } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { CollapseViewSource } from "../../ViewCodeData/ViewCodeData";

const CollapseWrapper = () => {

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12}>
          <Row className="mb-2">
            <Col xs={12} sm={12} md={7}>
              <h1 className="fw-medium font-22">Collapse</h1>
            </Col>
            <Col xs={12} sm={12} md={5} className="text-end">
              <ViewCodeButton show={show} setShow={setShow} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <Nav.Link
                  href="#"
                  onClick={(event) => {
                    event.preventDefault()
                    setOpen(!open)
                  }}
                  aria-controls="link-with-href"
                  aria-expanded={open}
                  className="mb-3 btn btn-primary text-white me-4"
                >
                  Link with href
                </Nav.Link>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="link-with-href"
                  aria-expanded={open}
                  className="mb-3"
                >
                  Button with data-bs-target
                </Button>
              </div>
              <Collapse in={open}>
                <div id="link-with-href">
                  <Card>
                    <Card.Body>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                      terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                      labore wes anderson cred nesciunt sapiente ea proident.
                    </Card.Body>
                  </Card>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ViewCodePopup show={show} setShow={setShow} NavData={CollapseViewSource} />
    </>
  );
};

export default CollapseWrapper;
