import React from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./components/events";
import { Buttons } from "./components/buttons";

const DxSchedular = () => {
  return (
    <div className="com-card-section">
      <div className="card mb-3">
        <div className="card-body px-8 py-6">
          <div className="row mb-3">
            <div className="col-12">
              <h4 className="">Dx-schedular</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Buttons />
            </div>
            <div className="col-9">
              <Scheduler events={EVENTS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { DxSchedular };
