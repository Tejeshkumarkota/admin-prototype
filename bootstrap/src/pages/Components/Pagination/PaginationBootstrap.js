import { useState } from "react";
import { Row, Col, Card, Pagination } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { PaginationData } from "../../ViewCodeData/ViewCodeData";

const PaginationBootstrap = () => {
    const [show, setShow] = useState(false);

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Pagination</h1>
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
                                    <Pagination>{items}</Pagination>
                                    <br />

                                    <Pagination size="lg">{items}</Pagination>
                                    <br />

                                    <Pagination size="sm" className="m-0">{items}</Pagination>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={PaginationData} />
        </>
    );
};

export default PaginationBootstrap;
