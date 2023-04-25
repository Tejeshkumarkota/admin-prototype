import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function PieChart() {
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

  const [sOptions, setSOptions] = useState(["Select", "2001", "2002", "2003", "2004", "2005"]);

  return (
    <>
      <Card className="h-100">
        <Card.Body>
          <Row className="align-items-center mb-3">
            <Col><h6 className="m-0">Pie Chart</h6></Col>
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
              <Pie data={data} options={options} height={300} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
