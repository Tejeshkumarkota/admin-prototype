import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Dataset 2',
            data: [40, 60, 40, 60, 40, 60],
            backgroundColor: 'rgb(75, 192, 192)',
          },
          {
            label: 'Dataset 3',
            data: [100, 20, 100, 30, 100, 40],
            backgroundColor: 'rgb(53, 162, 235)',
          },
        ],
    };

    const [sOptions, setSOptions] = useState(["2001", "2002", "2003", "2004", "2005"]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row mb-3 ">
          <div className="col-6 text-start">
            <h5 className="">Stacked Bar Chart</h5>
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
