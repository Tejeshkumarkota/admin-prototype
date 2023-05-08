import React, { useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
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
              <Link to={"/components/collapse"}>Collapse</Link>
              <Link to={"/components/dropdown"}>Dropdown</Link>
              <Link to={"/components/list-group"}>List Group</Link>
              <Link to={"/components/off-canvas"}>Off Canvas</Link>
              <Link to={"/components/scrollspy"}>Scrollspy</Link>
              <Link to={"/components/navs-tabs"}>Navs and Tabs</Link>
              <Link to={"/components/pagination"}>Pagination</Link>
              <Link to={"/components/popovers"}>Popovers</Link>
              <Link to={"/components/progress"}>Progress</Link>
              <Link to={"/components/badge"}>Badge</Link>
              <Link to={"/components/breadcrumb"}>Breadcrumb</Link>
              <Link to={"/components/buttons"}>Buttons</Link>
              <Link to={"/components/basic-form"}>Basic Form</Link>
              <Link to={"/components/advanced-form"}>Advanced Form</Link>
              <Link to={"/components/spinner"}>Spinner</Link>
              <Link to={"/components/toasts"}>Toasts</Link>
              <Link to={"/components/sweet-alert"}>Sweet Alert</Link>
              <Link to={"/components/tooltip"}>Tooltip</Link>

              
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
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text1"
            aria-expanded={open2}
          >
            Charts
          </Link>
          <Collapse in={open2}>
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
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text2"
            aria-expanded={open3}
          >
            Floor Plan
          </Link>
          <Collapse in={open3}>
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
