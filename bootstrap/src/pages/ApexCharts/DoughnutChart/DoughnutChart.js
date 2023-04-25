import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function DoughnutChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Dubai", "Asia", "Europe",],
    datasets: [
      {
        data: [12, 19, 3,],
        backgroundColor: [
          "#5c72fe",
          "#ff0058",
          "#00d4d4"
        ],
        borderColor: [
          "#fff",
          "#fff",
          "#fff"
        ],
        borderWidth: 3,
      },
    ],
  };
  const options = {
    legend: {
      "position": "bottom",
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    offset: true,
  };
  const [sOptions, setSOptions] = useState(["2001", "2002", "2003", "2004", "2005"]);
  return (
    <>
      <Card>
        <Card.Body>
          <Row className="align-items-center mb-3">
            <Col><h6 className="m-0">Doughnut Chart</h6></Col>
            <Col>
              <Row>
                <Col>
                  <Form.Select size="sm" className="py-2">
                    {sOptions.map((element, index) => (
                      <option key={index}>{element}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Button variant="outline-secondary" size="sm" className="py-2">Download</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Doughnut data={data} options={options} height={300} />
              <div className="inner-text">
                <h5 className="font-12 text-primary fw-boldest">
                  <span className="text-dark">Total</span> <br /> 0
                </h5>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
