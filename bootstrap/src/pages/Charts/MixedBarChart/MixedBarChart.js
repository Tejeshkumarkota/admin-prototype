import React from "react";
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
//import faker from 'faker';
import { Link } from "react-router-dom";

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

  const labels = [ "January",    "February",    "March",    "April",    "May",    "June",    "July",];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [140, 100, 160, 100, 140, 100,],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: [160, 200, 140, 100, 160, 200,],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row mb-3 ">
          <div className="col-6 text-start">
            <h5 className="">Mixed bar chart</h5>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
              <select className="form-select me-2 chart-select">
                <option> Select Year </option>
                <option value="1">2001</option>
                <option value="2">2002</option>
                <option value="3">2003</option>
                <option value="4">2004</option>
                <option value="5">2005</option>
                <option value="6">2006</option>
                <option value="7">2007</option>
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
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
