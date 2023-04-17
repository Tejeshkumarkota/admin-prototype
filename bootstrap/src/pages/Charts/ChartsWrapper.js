import React from "react";
import { DoughnutChart } from "./DoughnutChart/DoughnutChart";
import { PieChart } from "./PieChart/PieChart";
import {BarChart} from "./BarChart/BarChart";
import {MixedBarChart} from"./MixedBarChart/MixedBarChart";
import {StackedBarChart} from './StackedBarChart/StackedBarChart';

const ChartsWrapper = () => {
  return (
    <div className="com-card-section container">
      <div className="row mb-3">
        <div className="col-12">
          <h4 className="font-14 fw-boldest text-black mb-0">Charts</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <PieChart />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <DoughnutChart />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <BarChart />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <MixedBarChart />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <StackedBarChart />
        </div>


      </div>
    </div>
  );
};
export { ChartsWrapper };
