import { useState } from "react";
import { Row, Col, Card, Toast, Button } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { ToastsData } from "../../ViewCodeData/ViewCodeData";

const ToastsBootstrap = () => {
    const [show, setShow] = useState(false);

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Toasts</h1>
                        </Col>
                        <Col xs={12} sm={12} md={5} className="text-end">
                            <ViewCodeButton show={show} setShow={setShow} />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} sm={12} md={12} className="mb-5">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md={6} className="mb-2">
                                    <Button onClick={toggleShowA} className="mb-2">
                                        Toggle Toast <strong>with</strong> Animation
                                    </Button>
                                    <Toast show={showA} onClose={toggleShowA}>
                                        <Toast.Header>
                                            <img
                                                src="holder.js/20x20?text=%20"
                                                className="rounded me-2"
                                                alt=""
                                            />
                                            <strong className="me-auto">Bootstrap</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                                    </Toast>
                                </Col>
                                <Col md={6} className="mb-2">
                                    <Button onClick={toggleShowB} className="mb-2">
                                        Toggle Toast <strong>without</strong> Animation
                                    </Button>
                                    <Toast onClose={toggleShowB} show={showB} animation={false}>
                                        <Toast.Header>
                                            <img
                                                src="holder.js/20x20?text=%20"
                                                className="rounded me-2"
                                                alt=""
                                            />
                                            <strong className="me-auto">Bootstrap</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                                    </Toast>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={ToastsData} />
        </>
    );
};

export default ToastsBootstrap;
