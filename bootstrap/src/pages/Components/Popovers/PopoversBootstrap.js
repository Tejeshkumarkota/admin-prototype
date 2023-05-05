import { useState } from "react";
import { Row, Col, Card, OverlayTrigger, Popover, Button } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { PopoversData } from "../../ViewCodeData/ViewCodeData";

const PopoversBootstrap = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Popovers</h1>
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
                                    {['top', 'right', 'bottom', 'left'].map((placement) => (
                                        <OverlayTrigger
                                            trigger="click"
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Popover id={`popover-positioned-${placement}`}>
                                                    <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                                    <Popover.Body>
                                                        <strong>Holy guacamole!</strong> Check this info.
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <Button variant="primary m" className="me-3">Popover on {placement}</Button>
                                        </OverlayTrigger>
                                    ))}
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

export default PopoversBootstrap;
