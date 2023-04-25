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

export function PortfolioChart() {
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
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
        label: "Done",
        data: [45, 32, 42, 35, 64, 45, 63, 25, 45, 55, 46, 65],
        backgroundColor: "#002C6A",
        barThickness: 15,
        borderColor: "transparent",
        maxBarThickness: 15,
        borderWidth: 2,
        borderRadius: {
          bottomRight: 2,
          bottomLeft: 2,
          topRight: 2,
          topLeft: 2,
        },
      },
      {
        datalabels: {
          color: "rgba(255, 99, 132, 1)",
          font: {
            size: 16,
            family: "'Poppins', sans-serif",
            lineHeight: 0.5,
          },
        },
        label: "In-Progress",
        data: [12, 16, 15, 18, 19, 20, 23, 21, 15, 23, 14, 17],
        backgroundColor: "rgba(255, 99, 132, 1)",
        barThickness: 15,
        borderColor: "transparent",
        maxBarThickness: 15,
        borderWidth: 2,
        borderRadius: {
          bottomRight: 2,
          bottomLeft: 2,
          topRight: 2,
          topLeft: 2,
        },
      },
      {
        datalabels: {
          color: "#e9ecef",
          font: {
            size: 16,
            family: "'Poppins', sans-serif",
            lineHeight: 0.5,
          },
        },
        label: "Rejected",
        data: [5, 4, 6, 2, 6, 3, 4, 5, 6, 4, 3, 4],
        backgroundColor: "#e9ecef",
        barThickness: 15,
        borderColor: "transparent",
        maxBarThickness: 15,
        borderWidth: 2,
        borderRadius: {
          bottomRight: 2,
          bottomLeft: 2,
          topRight: 2,
          topLeft: 2,
        },
      },
    ],
  };

  const [sOptions, setSOptions] = useState(["Select", "2001", "2002", "2003", "2004", "2005"]);

  return (
    <>
      <Card className="h-100">
        <Card.Body>
          <Row className="align-items-center mb-3">
            <Col><h6 className="m-0">Portfolio Chart</h6></Col>
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
