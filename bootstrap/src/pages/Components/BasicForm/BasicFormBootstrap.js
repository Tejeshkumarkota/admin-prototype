import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { BasicFormData } from "../../ViewCodeData/ViewCodeData";

const BasicFormBootstrap = () => {
    const [show, setShow] = useState(false);
    

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Basic Form</h1>
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
                                <Col sm={12}>
                                   
                                </Col>
                                
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                

                
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={BasicFormData} />
        </>
    );
};

export default BasicFormBootstrap;
