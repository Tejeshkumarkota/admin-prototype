import { useState } from 'react';
import { DoughnutChart } from "./DoughnutChart/DoughnutChart";
import { PieChart } from "./PieChart/PieChart";
import { BarChart } from "./BarChart/BarChart";
import { MixedBarChart } from "./MixedBarChart/MixedBarChart";
import { StackedBarChart } from './StackedBarChart/StackedBarChart';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { BsCodeSlash } from "react-icons/bs";

const ChartJsWrapper = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="mb-4">
        <Col><h4 className="fw-boldest text-black mb-0">Charts</h4></Col>
        <Col className="text-end">
          <Button onClick={handleShow} variant="outline-primary" type="button" className="py-1 px-2 btn-sm">
            <BsCodeSlash />
          </Button>
        </Col>
      </Row>
      
      <Row>
        <Col sm={6} xs={12} className="mb-4"><PieChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><DoughnutChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><BarChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><MixedBarChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><StackedBarChart /></Col>
        <Col sm={6} xs={12} className="mb-4"></Col>
      </Row>
      <Modal size="xl" show={show} className='custom-modal' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
      </Modal>
    </>
  );
};
export { ChartJsWrapper };
