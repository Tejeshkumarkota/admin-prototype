import React, { useState } from 'react';
import { Nav, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
          <Link to={"/"} activeClassName="active">Dashboard</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={" "} className='nav-drop' onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}>Components</Link>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Link to={"/components/modal"}>Modal</Link>
              <Link to={"/components/accordion"}>Accordian</Link>
              <Link to={"/components/alert"}>Alert</Link>
              <Link to={"/charts"}>Charts</Link>
              <Link to={"/gantt-chart"}>Gantt Chart</Link>
              <Link to={"/dx-schedular"}>DX Scheduler</Link>
            </div>
          </Collapse>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavMenu;