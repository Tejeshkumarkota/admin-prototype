import React, { useState } from "react";
import { Row, Col, Card } from 'react-bootstrap';
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./components/events";
import { Buttons } from "./components/buttons";
import ViewCodePopup from "../../Components/ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../../Components/ViewCodeButton/ViewCodeButton";
import { DxSchedularData } from '../../ViewCodeData/ViewCodeData';

const DxSchedular = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Row className="mb-4">
        <Col><h4 className="fw-boldest text-black mb-0">Dx-schedular</h4></Col>
        <Col className="text-end">
          <ViewCodeButton show={show} setShow={setShow} />
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <Row>
            <Col sm={4} lg={3}> <Buttons /> </Col>
            <Col sm={8} lg={9}> <Scheduler events={EVENTS} /> </Col>
          </Row>
        </Card.Body>
      </Card>
      <ViewCodePopup show={show} setShow={setShow} NavData={DxSchedularData} />
    </>
  );
};
export { DxSchedular };
