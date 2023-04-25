import { useState } from 'react';
import { DoughnutChart } from "./DoughnutChart/DoughnutChart";
import { PieChart } from "./PieChart/PieChart";
import { BarChart } from "./BarChart/BarChart";
import { MixedBarChart } from "./MixedBarChart/MixedBarChart";
import { Row, Col } from 'react-bootstrap';
import ViewCodePopup from "../Components/ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../Components/ViewCodeButton/ViewCodeButton";
import {ChartData} from '../ViewCodeData/ViewCodeData';
import {LineChart} from './LineChart/LineChart';
import {ScatterChart} from './ScatterChart/ScatterChart';

const ApexChartJsWrapper = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row className="mb-4">
        <Col><h4 className="fw-boldest text-black mb-0">Apex Charts</h4></Col>
        <Col className="text-end">
          <ViewCodeButton show={show} setShow={setShow} />
        </Col>
      </Row>
      
      <Row>
        <Col sm={6} xs={12} className="mb-4"><LineChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><PieChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><DoughnutChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><BarChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><MixedBarChart /></Col>
        <Col sm={6} xs={12} className="mb-4"><ScatterChart /></Col>
      </Row>
      <ViewCodePopup show={show} setShow={setShow} NavData={ChartData} />
    </>
  );
};
export { ApexChartJsWrapper };
