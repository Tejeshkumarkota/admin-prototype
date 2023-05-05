import { useState } from "react";
import { Row, Col, Card, Badge, Button, Dropdown, Image, Form } from "react-bootstrap";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { BadgeData } from "../../ViewCodeData/ViewCodeData";
import { Link } from "react-router-dom";

const BadgeBootstrap = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Badge</h1>
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
                                    <p className="font-16">Badges</p>
                                </Col>
                                <Col sm={12} className="mb-4">
                                    <Badge bg="primary">
                                        Primary
                                    </Badge>{' '}
                                    <Badge bg="secondary">
                                        Secondary
                                    </Badge>{' '}
                                    <Badge bg="success">
                                        Success
                                    </Badge>{' '}
                                    <Badge bg="danger">
                                        Danger
                                    </Badge>{' '}
                                    <Badge bg="warning" text="dark">
                                        Warning
                                    </Badge>{' '}
                                    <Badge bg="info">
                                        Info
                                    </Badge>{' '}
                                    <Badge bg="light" text="dark">
                                        Light
                                    </Badge>{' '}
                                    <Badge bg="dark">
                                        Dark
                                    </Badge>
                                </Col>
                                <Col sm={12}>
                                    <p className="font-16">Pill badges</p>
                                </Col>
                                <Col sm={12} className="mb-4">
                                    <Badge pill bg="primary">
                                        Primary
                                    </Badge>{' '}
                                    <Badge pill bg="secondary">
                                        Secondary
                                    </Badge>{' '}
                                    <Badge pill bg="success">
                                        Success
                                    </Badge>{' '}
                                    <Badge pill bg="danger">
                                        Danger
                                    </Badge>{' '}
                                    <Badge pill bg="warning" text="dark">
                                        Warning
                                    </Badge>{' '}
                                    <Badge pill bg="info">
                                        Info
                                    </Badge>{' '}
                                    <Badge pill bg="light" text="dark">
                                        Light
                                    </Badge>{' '}
                                    <Badge pill bg="dark">
                                        Dark
                                    </Badge>
                                </Col>
                                <Col sm={12}>
                                    <p className="font-16">Examples</p>
                                </Col>
                                <Col sm={12}>
                                    <div className="">
                                        <Button variant="primary" className="me-5">
                                            Notifications <Badge bg="danger" shape="rounded-pill">9</Badge>
                                            <span className="visually-hidden">unread messages</span>
                                        </Button>

                                        <Button color="primary" className="position-relative me-5">
                                            Index
                                            <Badge color="danger" shape="rounded-pill"
                                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                99+ <span className="visually-hidden">unread messages</span>
                                            </Badge>
                                        </Button>

                                        <Button color="primary" className="position-relative me-5">
                                            Profile
                                            <Badge color="danger" shape="rounded-pill"
                                                className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                <span className="visually-hidden">unread messages</span>
                                            </Badge>
                                        </Button>

                                        <Link className="position-relative me-3 text-primary">
                                            <BsFillBellFill size='30' />
                                            <Badge color="danger" shape="rounded-pill"
                                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                9 <span className="visually-hidden">unread messages</span>
                                            </Badge>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={12} md={12} className="mb-2">
                    <h1 className="fw-medium font-22">Notification Dropdown</h1>
                </Col>
                <Col xs={12} sm={12} md={12} className="mb-5">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xs={12} sm={12} md={12}>
                                    <Dropdown>
                                        <Dropdown.Toggle className="position-relative me-3 text-primary" variant="text-primary">
                                            <BsFillBellFill size='30' />
                                            <Badge color="danger" shape="rounded-pill"
                                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                9 <span className="visually-hidden">unread messages</span>
                                            </Badge>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1" color="primary">
                                                <Row className="align-items-center">
                                                    <Col sm={2}>
                                                        <Image src="https://static.onecms.io/wp-content/uploads/sites/37/2018/08/15232727/farmhouse-side-table-1b990c68.jpg"
                                                            width="40px" height="40px" roundedCircle className="me-3" />
                                                    </Col>
                                                    <Col sm={10}>
                                                        <small>March 12, 2022 <br></br> <span className="fw-bold">A new monthly report is ready to download!</span></small>
                                                    </Col>
                                                </Row>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="2">
                                                <Row className="align-items-center">
                                                    <Col sm={2}>
                                                        <Image src="https://static.onecms.io/wp-content/uploads/sites/37/2018/08/15232727/farmhouse-side-table-1b990c68.jpg"
                                                            width="40px" height="40px" roundedCircle className="me-3" />
                                                    </Col>
                                                    <Col sm={10}>
                                                        <small>March 12, 2022 <br></br> <span className="fw-bold">A new monthly report is ready to download!</span></small>
                                                    </Col>
                                                </Row>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="3">
                                                <Row className="align-items-center">
                                                    <Col sm={2}>
                                                        <Image src="https://static.onecms.io/wp-content/uploads/sites/37/2018/08/15232727/farmhouse-side-table-1b990c68.jpg"
                                                            width="40px" height="40px" roundedCircle className="me-3" />
                                                    </Col>
                                                    <Col sm={10}>
                                                        <small>March 12, 2022 <br></br> <span className="fw-bold">A new monthly report is ready to download!</span></small>
                                                    </Col>
                                                </Row>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4" className="text-center font-13"> Show All Alerts </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={12} md={12} className="mb-2">
                    <h1 className="fw-medium font-22">Search</h1>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xs={5} sm={5} md={5}>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-0 rounded-0"
                                            aria-label="Search"
                                        />
                                        <Button className="rounded-0">
                                            <BsSearch />
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={BadgeData} />
        </>
    );
};

export default BadgeBootstrap;
