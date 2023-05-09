import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

export function AddForm() {
    const [inputForm, setInputForm] = useState([ ]);

    const addInputForm = () => {
        setInputForm([...inputForm, {
            meta: '',
        }])
    }
    const removeInputForm = (index) => {
        const rows = [...inputForm];
        rows.splice(index, 1);
        setInputForm(rows);
    }
    const handleChangeForm = (index, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputForm];
        list[index][name] = value;
        setInputForm(list);
    }

    const Config = () => {
        return (
        <>
            {
                inputForm.map((data, index) => {
                    const { meta, values, salary } = data;
                    return (
                        <Row className="row my-3 align-items-center" key={index}>
                            <Col sm={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Meta</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(evnt) => handleChangeForm(index, evnt)}
                                        value={meta}
                                        name="meta"
                                        placeholder="Full Name"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Values</Form.Label>
                                    <Form.Control
                                        type="Values"
                                        onChange={(evnt) => handleChangeForm(index, evnt)}
                                        value={values}
                                        name="values"
                                        placeholder="values"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                {(inputForm.length !== 1) ? <Button variant="primary" onClick={removeInputForm}>x</Button>
                                    : <Button variant="primary" onClick={removeInputForm}>x</Button>}
                            </Col>
                        </Row>
                    )
                })
            }
        </>
        )
    }

    return (
        <>
            <Row>
                <Col sm={12}>
                    <Config />
                </Col>
                <Col sm={12}>
                    <Button onClick={addInputForm} className="px-4">Add Values</Button>
                </Col>
            </Row>
        </>
    );
}