import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Swal from 'react-bootstrap-sweetalert';
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { SweetAlertData } from "../../ViewCodeData/ViewCodeData";


const SweetAlertBootstrap = () => {
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Sweet Alert</h1>
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
                                    <Button onClick={() => setShowAlert(true)} className="px-4">Show sweet alert</Button>
                                    <Swal
                                        success
                                        show={showAlert}
                                        title="Woot!"
                                        text=" I did it!"
                                        onConfirm={handleCloseAlert}
                                        onCancel={handleCloseAlert}
                                        confirmBtnBsStyle="success"
                                        cancelBtnBsStyle="danger"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ViewCodePopup show={show} setShow={setShow} NavData={SweetAlertData} />
        </>
    );
};

export default SweetAlertBootstrap;
