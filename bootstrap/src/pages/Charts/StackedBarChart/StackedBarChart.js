import React from "react";
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
                <Bar options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
