import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


export function StackedBarChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    plugins: {
      title: {
        display: true,
        ///text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [100, 80, 100, 80, 100, 80],
        backgroundColor: '#00d4d4',
      },
      {
        label: 'Dataset 2',
        data: [40, 60, 40, 60, 40, 60],
        backgroundColor: '#ff0058',
      },
      {
        label: 'Dataset 3',
        data: [100, 20, 100, 30, 100, 40],
        backgroundColor: '#5c72fe',
      },
    ],
  };

  const [sOptions, setSOptions] = useState(["Select", "2001", "2002", "2003", "2004", "2005"]);

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="align-items-center mb-3">
            <Col><h6 className="m-0">Stacked Bar Chart</h6></Col>
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
