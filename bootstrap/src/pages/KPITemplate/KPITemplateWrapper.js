import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Card } from 'react-bootstrap';
import ViewCodePopup from "../Components/ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../Components/ViewCodeButton/ViewCodeButton";
import { FullCalendarData } from '../ViewCodeData/ViewCodeData';

const KPITemplateWrapper = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Row className="mb-4">
                <Col><h4 className="fw-boldest text-black mb-0">KPI Template </h4></Col>
                <Col className="text-end">
                    <ViewCodeButton show={show} setShow={setShow} />
                </Col>
            </Row>
            <Row>
                <Col sm={8} lg={9}>a</Col>
                <Col sm={4} lg={3}>b</Col>
            </Row>
        </>
    );
}
export {KPITemplateWrapper}