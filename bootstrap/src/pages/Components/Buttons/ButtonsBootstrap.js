import { useState } from "react";
import { Row, Col, Card, Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { ButtonsData } from "../../ViewCodeData/ViewCodeData";

const ButtonsBootstrap = () => {
    const [show, setShow] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Radio 1', value: '1' },
        { name: 'Radio 2', value: '2' },
        { name: 'Radio 3', value: '3' },
    ];

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Buttons</h1>
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
                                    <p className="font-16">Solid Buttons</p>
                                </Col>
                                <Col sm={12} className="mb-3">
                                    <Button variant="primary">Primary</Button>{' '}
                                    <Button variant="secondary">Secondary</Button>{' '}
                                    <Button variant="success">Success</Button>{' '}
                                    <Button variant="warning">Warning</Button>{' '}
                                    <Button variant="danger">Danger</Button>{' '}
                                    <Button variant="info">Info</Button>{' '}
                                    <Button variant="light">Light</Button>{' '}
                                    <Button variant="dark">Dark</Button>
                                    <Button variant="link">Link</Button>
                                </Col>

                                <Col sm={12}>
                                    <p className="font-16">Outline Buttons</p>
                                </Col>
                                <Col sm={12}>
                                    <Button variant="outline-primary">Primary</Button>{' '}
                                    <Button variant="outline-secondary">Secondary</Button>{' '}
                                    <Button variant="outline-success">Success</Button>{' '}
                                    <Button variant="outline-warning">Warning</Button>{' '}
                                    <Button variant="outline-danger">Danger</Button>{' '}
                                    <Button variant="outline-info">Info</Button>{' '}
                                    <Button variant="outline-light">Light</Button>{' '}
                                    <Button variant="outline-dark">Dark</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={12} md={12}>
                    <h1 className="fw-medium font-22">Button group</h1>
                </Col>

                <Col xs={12} sm={12} md={12} className="mb-5">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xs={12} sm={6} md={6}>
                                    <p className="font-16">Basic example</p>
                                    <ButtonGroup aria-label="Basic example" className="mb-4">
                                        <Button variant="primary" className="px-3">Left</Button>
                                        <Button variant="primary" className="px-3">Middle</Button>
                                        <Button variant="primary" className="px-3">Right</Button>
                                    </ButtonGroup>

                                    <p className="font-16">Checkbox Button Groups</p>
                                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                                        <ToggleButton id="tbg-check-1" variant="outline-primary" value={1}>
                                            Checkbox 1
                                        </ToggleButton>
                                        <ToggleButton id="tbg-check-2" variant="outline-primary" value={2}>
                                            Checkbox 2
                                        </ToggleButton>
                                        <ToggleButton id="tbg-check-3" variant="outline-primary" value={3}>
                                            Checkbox 3
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Col>

                                <Col xs={12} sm={6} md={6} className="mb-3">
                                    <p className="font-16">Outline example</p>
                                    <ButtonGroup aria-label="Basic example" className="mb-4">
                                        <Button variant="outline-primary" className="px-3">Left</Button>
                                        <Button variant="outline-primary" className="px-3">Middle</Button>
                                        <Button variant="outline-primary" className="px-3">Right</Button>
                                    </ButtonGroup>

                                    <p className="font-16">Radio Button Groups</p>
                                    <ButtonGroup>
                                        {radios.map((radio, idx) => (
                                            <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                variant="outline-primary"
                                                name="radio"
                                                value={radio.value}
                                                checked={radioValue === radio.value}
                                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={ButtonsData} />
        </>
    );
};

export default ButtonsBootstrap;
