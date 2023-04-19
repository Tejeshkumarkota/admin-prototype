import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function MixedBarChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        //text: "Chart.js Line Chart - Multi Axis",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = ["January", "February", "March", "April", "May", "June", "July",];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [140, 100, 160, 100, 140, 100,],
        borderColor: "#ff0058",
        backgroundColor: "#ff0058",
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: [160, 200, 140, 100, 160, 200,],
        borderColor: "#00d4d4",
        backgroundColor: "#00d4d4",
        yAxisID: "y1",
      },
    ],
  };

  const [sOptions, setSOptions] = useState(["select", "2001", "2002", "2003", "2004", "2005"]);

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="align-items-center mb-3">
            <Col><h6 className="m-0">Mixed bar chart</h6></Col>
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
              <Line options={options} data={data} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
