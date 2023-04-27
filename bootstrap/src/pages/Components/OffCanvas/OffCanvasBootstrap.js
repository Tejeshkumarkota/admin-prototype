import { useState } from "react";
import { Row, Col, Card, Button, Nav } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { OffCanvasViewSource } from "../../ViewCodeData/ViewCodeData";

const OffCanvasBootstrap = () => {
    const [show, setShow] = useState(false);

    const [visible, setVisible] = useState(false);

    const handleClose = () => setVisible(false);
    const handleShow = () => setVisible(true);

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Off Canvas</h1>
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
                                    onClick={handleShow}
                                    className="btn btn-primary text-white me-4 text-uppercase font-12"
                                    variant="primary"
                                >
                                    Link with href
                                </Nav.Link>
                                <Button variant="primary" onClick={handleShow} className="text-uppercase font-12">
                                    Button with data-bs-target
                                </Button>
                            </div>

                            <Offcanvas show={visible} onHide={handleClose} backdrop="static">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    I will not close if you click outside of me.
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={OffCanvasViewSource} />
        </>
    );
};

export default OffCanvasBootstrap;
