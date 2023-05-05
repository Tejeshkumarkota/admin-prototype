import { useState } from "react";
import { Row, Col, Card, Tab, Tabs, Nav } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { NavsAndTabsData } from "../../ViewCodeData/ViewCodeData";
import { Text } from './Componants/Text';

const NavsTabsBootstrap = () => {
    const [show, setShow] = useState(false);
    const [key, setKey] = useState('home');

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Navs and Tabs</h1>
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
                                <Col sm={12} className="mb-5">
                                    <p className="fw-medium font-16 mb-4">Tabs</p>
                                    <Tabs
                                        id="controlled-tab-example"
                                        activeKey={key}
                                        onSelect={(k) => setKey(k)}
                                        className="mb-3"
                                    >
                                        <Tab eventKey="home" title="Home">
                                            <Text />
                                        </Tab>
                                        <Tab eventKey="profile" title="Profile">
                                            <Text />
                                        </Tab>
                                        <Tab eventKey="contact" title="Contact">
                                            <Text />
                                        </Tab>
                                    </Tabs>
                                </Col>
                                <Col sm={12}>
                                    <p className="fw-medium font-16 mb-4">Left Side Pills</p>
                                </Col>
                                <Col sm={12} className="mb-5">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                        <Row>
                                            <Col sm={3}>
                                                <Nav variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">Home</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">Profile</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="contact">Contact</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col sm={9}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="first">
                                                        <Text />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <Text />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="contact">
                                                        <Text />
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Col>
                                <Col sm={12}>
                                    <p className="fw-medium font-16 mb-4">Pills</p>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Container defaultActiveKey="first">
                                        <Row>
                                            <Col sm={12} className="mb-3">
                                                <Nav variant="pills" className="d-flex">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">Home</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">Profile</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="contact">Contact</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col sm={12}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="first">
                                                        <Text />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <Text />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="contact">
                                                        <Text />
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={NavsAndTabsData} />
        </>
    );
}; 

export default NavsTabsBootstrap;
