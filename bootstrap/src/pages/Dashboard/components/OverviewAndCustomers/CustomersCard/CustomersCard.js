import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Card, Col, Row } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import React, { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomersCard = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    // maintainAspectRatio: false,
    height: 150,
    width: 150,
  };

  const data1 = {
    labels: ["Company 1", "Company 2", "Company 3"],
    datasets: [
      {
        label: "Customers",
        data: [20, 45, 35],
        backgroundColor: ["#F43597", "#5B34E9", "#F1EFFC"],
        borderColor: ["#F43597", "#5B34E9", "#F1EFFC"],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <Card className="mb-4 border-0 rounded-10">
        <Card.Body>
          <Card.Title className="card-title text-black fw-bold border-0 mb-2 pb-0 font-18">
            Customers
          </Card.Title>
          <Card.Text className="text-rgb-black fw-medium font-13 mb-4">
            Customers that buy products
          </Card.Text>
          <Row>
            <Col sm={12} md={12} lg={12} className="pb-4">
              <div className="position-relative donut-chart-circle">
                <Doughnut data={data1} options={options} />
                <div className="inner-text">
                  <h5 className="font-13 text-black">
                    <span className="font-22 fw-bold d-block">65%</span>
                    <span className="fw-medium">
                      Total New <br /> Customers
                    </span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomersCard;
