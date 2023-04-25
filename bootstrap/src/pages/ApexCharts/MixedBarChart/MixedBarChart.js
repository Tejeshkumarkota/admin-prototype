import React, { useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [120, 50, 130, 100, 190, 160],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [145, 130, 125, 165, 110, 80],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: [95, 105, 135, 135, 145, 165],
    },
  ],
};

export function MixedBarChart() {
const [sOptions, setSOptions] = useState(["select", "2001", "2002", "2003", "2004", "2005"]);

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
               <Chart type='bar' data={data} />;
             </Col>
           </Row>
         </Card.Body>
       </Card>
     </>
   );

}
