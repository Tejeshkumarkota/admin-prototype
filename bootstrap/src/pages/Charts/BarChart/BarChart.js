import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function BarChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        //text: "Chart.js Bar Chart",
      },
    },
  };
  const labels = ["January", "February", "March", "April", "May", "June", "July",];
  const data = {
    labels,
    datasets: [
      {
        datalabels: {
          color: "#EAEFF5",
          font: {
            size: 16,
            family: "'Poppins', sans-serif",
            lineHeight: 0.5,
          },
        },
        label: "In-Progress",
        data: [40, 60, 40, 60, 40, 60],
        backgroundColor: "#002C6A",
        barThickness: 45,
        maxBarThickness: 45,
        borderRadius: {
          bottomRight: 5,
          bottomLeft: 5,
          topRight: 5,
          topLeft: 5,
        },
      },
      {
        datalabels: {
          color: "#EAEFF5",
          font: {
            size: 16,
            family: "'Poppins', sans-serif",
            lineHeight: 0.5,
          },
        },
        label: "Whole",
        data: [100, 80, 100, 80, 100, 80],
        backgroundColor: "#EAEFF5",
        barThickness: 45,
        maxBarThickness: 45,
        borderRadius: {
          bottomRight: 0,
          bottomLeft: 0,
          topRight: 5,
          topLeft: 5,
        },
      },
    ],
  };

  const [sOptions, setSOptions] = useState(["Select", "2001", "2002", "2003", "2004", "2005"]);

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="align-items-center mb-3">
            <Col><h6 className="m-0">Bar Chart</h6></Col>
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
              <Bar options={options} data={data} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
