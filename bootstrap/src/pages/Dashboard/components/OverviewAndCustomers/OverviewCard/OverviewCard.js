import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
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
      label: "Overview",
      data: [50, 40, 65, 55, 60, 30, 60, 70, 65, 55, 50, 60],
      backgroundColor: "#F2F0FE",
      hoverBackgroundColor: "#5A32EA",
      barThickness: 48,
      maxBarThickness: 48,
      borderRadius: {
        bottomRight: 10,
        bottomLeft: 10,
        topRight: 10,
        topLeft: 10,
      },
    },
  ],
};

const OverviewCard = () => {
  return (
    <>
      <Card className="mb-4 border-0 rounded-10">
        <Card.Body>
          <Row>
            <Col sm={6} xs={6} md={6} lg={6} className="mb-3">
              <Card.Title className="card-title text-black fw-bold border-0 mb-2 pb-0 font-18">
                Overview
              </Card.Title>
              <Card.Text className="text-rgb-black fw-medium font-13 mb-2">
                Monthly Earning
              </Card.Text>
            </Col>
            <Col sm={6} xs={6} md={6} lg={6}>
              <div className="d-flex justify-content-end mb-3">
                <Form.Select className="border-0 font-14 fw-medium shadow-none">
                  <option value="1">Monthly</option>
                  <option value="2" selected>
                    Quarterly
                  </option>
                  <option value="3">Yearly</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <Bar options={options} data={data} height={320} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default OverviewCard;
