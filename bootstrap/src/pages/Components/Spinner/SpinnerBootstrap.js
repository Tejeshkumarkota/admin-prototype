import { useState } from "react";
import { Row, Col, Card, Spinner, Button } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { SpinnerData } from "../../ViewCodeData/ViewCodeData";

const SpinnerBootstrap = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Spinner</h1>
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
                                <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                                    <p>Ajax Loader</p>
                                    <Spinner animation="border" role="status" variant="primary" className="me-5">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    <Spinner animation="grow" variant="primary" />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <p>Button Loading</p>
                                    <Button variant="primary" disabled className="me-3">
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        <span className="visually-hidden">Loading...</span>
                                    </Button> 
                                    <Button variant="primary" disabled>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={SpinnerData} />
        </>
    );
};

export default SpinnerBootstrap;
