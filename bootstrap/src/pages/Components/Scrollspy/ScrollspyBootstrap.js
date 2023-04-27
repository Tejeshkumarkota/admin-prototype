import { useState } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import Scrollspy from 'react-scrollspy'
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { ScrollspyViewSource } from "../../ViewCodeData/ViewCodeData";

const ScrollspyBootstrap = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Scrollspy</h1>
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
                                <Col xs={4} sm={4} md={4}>
                                    <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current" className="m-0 p-0">
                                        <ListGroup defaultActiveKey="#section-1">
                                            <ListGroup.Item action href="#section-1">
                                                Item 1
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#section-2">
                                                Item 2
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#section-3">
                                                Item 3
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Scrollspy>
                                </Col>
                                <Col xs={8} sm={8} md={8}>
                                    <div className="scrollyspy-div">
                                        <section id="section-1">
                                            <h3>Item 1</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </section>
                                        <section id="section-2">
                                            <h3>Item 2</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </section>
                                        <section id="section-3">
                                            <h3>Item 3</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </section>
                                    </div>
                                </Col>
                            </Row>                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={ScrollspyViewSource} />
        </>
    );
};

export default ScrollspyBootstrap;
