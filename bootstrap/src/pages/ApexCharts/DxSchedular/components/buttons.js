import React from "react";
import Button from 'react-bootstrap/Button';

export function Buttons() {
  return (
    <>
      <Button className="w-100 mb-3 text-start font-14" variant="primary">New Brochures</Button>
      <Button className="w-100 mb-3 text-start font-14" variant="secondary">Brochure Design Review</Button>
      <Button className="w-100 mb-3 text-start font-14" variant="success">Upgrade Personal Computers</Button>
      <Button className="w-100 mb-3 text-start font-14" variant="warning">Install New Router in Dev Room</Button>
      <Button className="w-100 mb-3 text-start font-14" variant="danger">Upgrade Server Hardware</Button>
      <Button className="w-100 mb-3 text-start font-14" variant="info">Install New Database</Button>
    </>
  );
}
