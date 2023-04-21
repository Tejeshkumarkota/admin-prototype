import React, { useState } from 'react'
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
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

const GroupedBarChart = () => {    
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
            text: 'Chart.js Bar Chart - Stacked',
          },
        },
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
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
            data: [40, 60, 40, 60, 40, 60],
            backgroundColor: '#5c72fe',
            stack: 'Stack 0',
          },
          {
            label: 'Dataset 2',
            data: [100, 80, 100, 80, 100, 80],
            backgroundColor: '#ff0058',
            stack: 'Stack 0',
          },
          {
            label: 'Dataset 3',
            data: [100, 60, 70, 30, 800, 10],
            backgroundColor: '#00d4d4',
            stack: 'Stack 1',
          },
        ],
      };

    const [sOptions, setSOptions] = useState(["Select", "2001", "2002", "2003", "2004", "2005"]);

    return (
        <>
            <Card>
                <Card.Body>
                    <Row className="align-items-center mb-3">
                        <Col><h6 className="m-0">Grouped Bar Chart</h6></Col>
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
export { GroupedBarChart }