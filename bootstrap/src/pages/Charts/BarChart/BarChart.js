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
//import faker from "faker";
import { Link } from "react-router-dom";

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
  const labels = [ "January", "February", "March", "April", "May", "June", "July",];
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

  const [sOptions, setSOptions] = useState(["2001", "2002", "2003", "2004", "2005"]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row mb-3 ">
          <div className="col-6 text-start">
            <h5 className="">Bar Chart</h5>
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
            <div className="m-auto">
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
