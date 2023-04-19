import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";

export function DoughnutChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: [
      "Red",
      "Blue",
      "Yellow",
      "Green", //'Purple', 'Orange'
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          //'rgba(153, 102, 255, 0.2)',
          //'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          //'rgba(153, 102, 255, 1)',
          //'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const [sOptions, setSOptions] = useState(["2001", "2002", "2003", "2004", "2005"]);
  return (
    <div className="card">
      <div className="card-body">
        <div className="row mb-3 ">
          <div className="col-6 text-start">
            <h5 className="">Doughnut Chart</h5>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
              <select className="form-select me-2 chart-select">
                {sOptions.map((element, index) => (
                  <option key={index}>{element}</option>
                ))}
              </select>
              <Link
                className="btn text-uppercase font-12 py-1 px-2 rounded"
                href="javascript:void(0);"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="w-50 m-auto">
              <Doughnut data={data} />
              <div className="inner-text">
                <h4 className="font-12 text-primary fw-boldest">
                 Total <br /> 0 
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
