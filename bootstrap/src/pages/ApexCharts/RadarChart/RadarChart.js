import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Voter',
      data: [44, 76, 41, 85, 43, 61],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: '# of NonVoters',
      data: [80, 30, 80, 40, 90, 45],
      backgroundColor: 'rgba(53, 162, 235, .2)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

export function RadarChart() {
const [sOptions, setSOptions] = useState(["Select", "2001", "2002", "2003", "2004", "2005"]);

  return (<>
                <Card className="h-100">
                  <Card.Body>
                    <Row className="align-items-center mb-3">
                      <Col><h6 className="m-0">Radar Chart</h6></Col>
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
                        <Radar data={data} height={200} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </>
            );
}
