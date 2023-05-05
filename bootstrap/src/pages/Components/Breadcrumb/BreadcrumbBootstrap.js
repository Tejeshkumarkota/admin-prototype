import { useState } from "react";
import { Row, Col, Card, Breadcrumb } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { BreadcrumbData } from "../../ViewCodeData/ViewCodeData";

const BreadcrumbBootstrap = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Breadcrumb</h1>
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
                                    <p className="font-16">Type 1</p>                                    
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#" className="text-warning">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item className="text-warning" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                            Library
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <br />
                                    <p className="font-16">Type 2</p>                                    
                                    <Breadcrumb className="m-0">
                                        <Breadcrumb.Item href="#" className="text-warning">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item className="text-warning" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                            Library
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                                    </Breadcrumb>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={BreadcrumbData} />
        </>
    );
};

export default BreadcrumbBootstrap;
