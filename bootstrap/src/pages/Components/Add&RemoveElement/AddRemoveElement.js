import { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { AddRemoveElementData } from "../../ViewCodeData/ViewCodeData";
import { AddForm } from './Components/AddForm';

const AddRemoveElement = () => {
    const [show, setShow] = useState(false);

    const [inputFields, setInputFields] = useState([{
        fullName: '',
    }]);

    const addInputField = () => {
        setInputFields([...inputFields, {
            fullName: '',
        }])
    }
    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    
    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Dynamically add and remove element</h1>
                        </Col>
                        <Col xs={12} sm={12} md={5} className="text-end">
                            <ViewCodeButton show={show} setShow={setShow} />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} sm={12} md={12} className="mb-5">
                    <Card>
                        <Card.Body>
                            <Row className="mb-5">
                                <Col sm={12}>
                                    <p className="fw-bold">No remaining element</p>
                                </Col>
                                <Col sm={12}>
                                    <AddForm />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <p className="fw-bold">Remaining with one element</p>
                                </Col>
                                <Col sm={12}>
                                    {
                                        inputFields.map((data, index) => {
                                            const { fullName, emailAddress, salary } = data;
                                            return (
                                                <Row className="row my-3 align-items-center" key={index}>
                                                    <Col sm={4}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                onChange={(evnt) => handleChange(index, evnt)}
                                                                value={fullName}
                                                                name="fullName"
                                                                placeholder="Full Name"
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={4}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Email Address</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                onChange={(evnt) => handleChange(index, evnt)}
                                                                value={emailAddress}
                                                                name="emailAddress"
                                                                placeholder="email Address"
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={4}>
                                                        {(inputFields.length !== 1) ? <Button variant="primary" onClick={removeInputFields}>x</Button>
                                                            : <Button variant="primary" onClick={removeInputFields}>x</Button>}
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }
                                </Col>
                                <Col sm={12}>
                                    <Button onClick={addInputField} className="px-4">Add Values</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={AddRemoveElementData} />
        </>
    );
};

export default AddRemoveElement;
