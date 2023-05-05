import { useState } from "react";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { PopoversData } from "../../ViewCodeData/ViewCodeData";

const ProgressBootstrap = () => {
    const [show, setShow] = useState(false);
    const now = 25;
    const nom = 80;

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Progress</h1>
                        </Col>
                        <Col xs={12} sm={12} md={5} className="text-end">
                            <ViewCodeButton show={show} setShow={setShow} />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} sm={12} md={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={12}>
                                    <ProgressBar now={now} label={`${now}%`} />
                                    <br />
                                    <ProgressBar striped variant="success" now={nom} label={`${nom}%`} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={PopoversData} />
        </>
    );
};

export default ProgressBootstrap;
