import { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
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
                            <Form>
                                <Row>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4" controlId="formBasicName">
                                            <Form.Label className="text-uppercase">Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4" controlId="formBasicEmail">
                                            <Form.Label className="text-uppercase">Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4" controlId="formBasicMobile">
                                            <Form.Label className="text-uppercase">Mobile Number</Form.Label>
                                            <Form.Control type="number" placeholder="Enter mobile" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label className="text-uppercase">Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter password" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Disabled input</Form.Label>
                                            <Form.Control type="text" placeholder="" disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Readonly</Form.Label>
                                            <Form.Control type="text" value="Admin Template" readOnly />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Select Input</Form.Label>
                                            <Form.Select aria-label="Select Input">
                                                <option>Select your age</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Range Input</Form.Label>
                                            <Form.Range />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Status</Form.Label>
                                            <div className="d-flex">
                                                <Form.Check label="Default Checkbox" type="checkbox" id="custom-Checkbox" className="me-3" />
                                                <Form.Check label="Checked" type="checkbox" id="custom-Checkbox1" checked />
                                            </div>
                                            <Form.Check label="Inline disabled checkbox" type="checkbox" id="custom-Checkbox3" disabled />
                                            <Form.Check label="Disabled Checked" type="checkbox" id="custom-Checkbox1" checked disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Status</Form.Label>
                                            <div className="d-flex mb-2">
                                                <Form.Check label="Default" type="radio" id="custom-radio1" />
                                                <Form.Check label="Default" type="radio" id="custom-radio2" className="mx-3" />
                                                <Form.Check label="Slected" type="radio" id="custom-radio3" checked />
                                            </div>
                                            <div className="d-flex">
                                                <Form.Check label="Disabled" type="radio" id="custom-radio4" disabled className="me-2" />
                                                <Form.Check label="Disabled Checked" type="radio" id="custom-radio5" checked disabled />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Toggle Switch</Form.Label>
                                            <Form.Check label="Toggle this switch element" type="switch" id="custom-switch" className="mb-2" />
                                            <Form.Check label="Toggle this switch element" type="switch" id="custom-switch" disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">File upload </Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Multiple Select</Form.Label>
                                            <Form.Select multiple >
                                                <option>Select your age</option>
                                                <option value="1" selected>One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                                <option value="6">Six</option>
                                                <option value="7">Seven</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="text-uppercase">Textarea</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Col>
                                    <Col className="text-end" xs={12} sm={12} md={12} lg={12}>
                                        <Button variant="outline-secondary" type="submit" className="me-3 px-3"> Cancel </Button>
                                        <Button variant="primary" type="submit" className="px-3"> Submit </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={BasicFormData} />
        </>
    );
};

export default BasicFormBootstrap;
