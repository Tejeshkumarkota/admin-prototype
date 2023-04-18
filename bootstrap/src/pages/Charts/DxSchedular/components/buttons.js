import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Buttons() {
  return (
    <>
      <button type="button" className="btn btn-primary w-100 mb-3 text-start font-14 px-4">
        New Brochures
      </button>
      <button type="button" className="btn btn-secondary w-100 mb-3 text-start font-14 px-4">
        Brochure Design Review
      </button>
      <button type="button" className="btn btn-success w-100 mb-3 text-start font-14 px-4">
        Upgrade Personal Computers
      </button>
      <button type="button" className="btn btn-danger w-100 mb-3 text-start font-14 px-4">
        Install New Router in Dev Room
      </button>
      <button type="button" className="btn btn-warning w-100 mb-3 text-start font-14 px-4">
        Upgrade Server Hardware
      </button>
      <button type="button" className="btn btn-info w-100 mb-3 text-start font-14 px-4">
        Install New Database
      </button>
    </>
  );
}
