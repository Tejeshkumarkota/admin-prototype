import { useState } from "react";
import { Row, Col, Card, Dropdown, DropdownButton } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { DropdownViewSource } from "../../ViewCodeData/ViewCodeData";

const DropdownBootstrap = () => {

    const [show, setShow] = useState(false);

    const list = [
        { key: "Dropdown text change", value: "Dropdown text change" },
        { key: "Yellow", value: "yellow" },
        { key: "Blue", value: "blue" },
        { key: "Green", value: "green" }
    ];

    const [selected, setSelected] = useState({});
    const handleSelect = (key, event) => {
        setSelected({ key, value: event.target.value });
    };

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Dropdown</h1>
                        </Col>
                        <Col xs={12} sm={12} md={5} className="text-end">
                            <ViewCodeButton show={show} setShow={setShow} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <Dropdown className="me-4">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <DropdownButton
                                    id="dropdown-text-change"
                                    variant="primary"
                                    className="floatRight"
                                    onSelect={handleSelect}
                                    title={selected?.key || list[0].key}
                                >
                                    {list.map((item, index) => {
                                        return (
                                            <Dropdown.Item key={index} eventKey={item.key}>
                                                {item.value}
                                            </Dropdown.Item>
                                        );
                                    })}
                                </DropdownButton>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={DropdownViewSource} />
        </>
    );
};

export default DropdownBootstrap;
