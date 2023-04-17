import { useState } from "react";
import { Row, Col, Card, Button, Alert } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";

const AlertBootstrap = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12}>
          <Row className="mb-2">
            <Col xs={12} sm={12} md={7}>
              <h1 className="fw-medium font-22">Alerts</h1>
            </Col>
            <Col xs={12} sm={12} md={5} className="text-end">
              <Button
                variant="outline-primary"
                type="button"
                className="py-1 px-2 btn-sm"
              >
                <BsCodeSlash />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <Card>
                <Card.Body>
                  <h1 className="fw-medium font-16">Example</h1>
                  <Alert
                    variant="primary"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <p className="mb-0 font-14">
                      Change this and that and try again. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Cras mattis consectetur purus sit amet
                      fermentum.
                    </p>
                  </Alert>
                  <Alert
                    variant="secondary"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <p className="mb-0 font-14">
                      Change this and that and try again. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Cras mattis consectetur purus sit amet
                      fermentum.
                    </p>
                  </Alert>
                  <Alert
                    variant="success"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <p className="mb-0 font-14">
                      Change this and that and try again. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Cras mattis consectetur purus sit amet
                      fermentum.
                    </p>
                  </Alert>
                  <Alert
                    variant="danger"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <p className="mb-0 font-14">
                      Change this and that and try again. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Cras mattis consectetur purus sit amet
                      fermentum.
                    </p>
                  </Alert>
                  <Alert
                    variant="warning"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <p className="mb-0 font-14">
                      Change this and that and try again. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Cras mattis consectetur purus sit amet
                      fermentum.
                    </p>
                  </Alert>
                  <Alert
                    variant="info"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <p className="mb-0 font-14">
                      Change this and that and try again. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Cras mattis consectetur purus sit amet
                      fermentum.
                    </p>
                  </Alert>
                  <Alert
                    variant="light"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <p className="mb-0 font-14">
                      Change this and that and try again. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Cras mattis consectetur purus sit amet
                      fermentum.
                    </p>
                  </Alert>
                  <Alert
                    variant="dark"
                    onClose={() => setShow(false)}
                    dismissible
                    className="mb-0"
                  >
                    <p className="mb-0 font-14">
                      Change this and that and try again. Duis mollis, est non
                      commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem nec elit. Cras mattis consectetur purus sit amet
                      fermentum.
                    </p>
                  </Alert>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AlertBootstrap;