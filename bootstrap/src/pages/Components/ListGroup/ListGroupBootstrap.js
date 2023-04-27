import { useState } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { ListGroupViewSource } from "../../ViewCodeData/ViewCodeData";

const ListGroupBootstrap = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">List Group</h1>
                        </Col>
                        <Col xs={12} sm={12} md={5} className="text-end">
                            <ViewCodeButton show={show} setShow={setShow} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Card>
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" active> An active item </ListGroup.Item>
                                <ListGroup.Item as="li">A second item</ListGroup.Item>
                                <ListGroup.Item as="li" disabled> A third item </ListGroup.Item>
                                <ListGroup.Item as="li">A fourth item</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={ListGroupViewSource} />
        </>
    );
};

export default ListGroupBootstrap;
