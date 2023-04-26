import React, { useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav
        activeKey="/"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="flex-column"
      >
        <Nav.Item>
          <Link 
            to={"/dashboard"} 
            activeClassName="active"
          >
            Dashboard
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to={" "}
            className="nav-drop"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Components
          </Link>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Link to={"/components/modal"}>Modal</Link>
              <Link to={"/components/accordion"}>Accordion</Link>
              <Link to={"/components/alert"}>Alerts</Link>
              <Link to={"/components/card"}>Card</Link>
              <Link to={"/components/carousel"}>Carousel</Link>
            </div>
          </Collapse>
        </Nav.Item>

        <Nav.Item>
          <Link 
            to={"/calendar"} 
            activeClassName="active"
          >
            Calendar
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link 
            to={"/kpi-template"} 
            activeClassName="active"
          >
            KPI Template 
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link
            to={" "}
            className="nav-drop"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text1"
            aria-expanded={open}
          >
            Charts
          </Link>
          <Collapse in={open}>
            <div id="example-collapse-text1">
              <Link to={"/charts"}>Chart Js</Link>
              <Link to={"/apex-chart"}>Apex Chart</Link>
              <Link to={"/gantt-chart"}>Gantt Chart</Link>
              <Link to={"/dx-schedular"}>DX Scheduler</Link>
            </div>
          </Collapse>
        </Nav.Item>
        <Nav.Item>
          <Link
            to={" "}
            className="nav-drop"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text2"
            aria-expanded={open}
          >
            Floor Plan
          </Link>
          <Collapse in={open}>
            <div id="example-collapse-text2">
              <h5 className="pt-1 font-14 m-0">DX Diagram</h5>
              <Link to={"/floor-plan-admin"}>Floor Plan Admin</Link>
              <h5 className="pt-2 font-14 m-0">Custom Code</h5>
              <Link to={"/floor-custom-code"}>Floor Custom Code</Link>
            </div>
          </Collapse>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavMenu;
