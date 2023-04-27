import { useState } from "react";
import { Row, Col, Card, Tab, Tabs } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { ScrollspyViewSource } from "../../ViewCodeData/ViewCodeData";
import { Text } from './Componants/Text';

const NavsTabsBootsrap = () => {
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
                                    <p className="fw-medium font-16 mb-4">Pills</p>
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

export default NavsTabsBootsrap;
