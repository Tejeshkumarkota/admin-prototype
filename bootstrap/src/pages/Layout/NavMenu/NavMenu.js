import React, { useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

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
          <Link to={"/"} activeClassName="active">
            <span className="icon-sidebar">
              <SpaceDashboardIcon />
            </span>
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
            <span className="icon-sidebar">
              <ViewInArIcon />
            </span>
            Product
          </Link>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Link to={"/"}>Lorem</Link>
              <Link to={"/"}>Ipsum</Link>
              <Link to={"/"}>Test</Link>
            </div>
          </Collapse>
        </Nav.Item>
        <Nav.Item>
          <Link
            to={" "}
            className="nav-drop"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text1"
            aria-expanded={open}
          >
            <span className="icon-sidebar">
              <PersonOutlineIcon />
            </span>
            Customers
          </Link>
          <Collapse in={open}>
            <div id="example-collapse-text1">
              <Link to={"/"}>Lorem</Link>
              <Link to={"/"}>Ipsum</Link>
              <Link to={"/"}>Test</Link>
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
            <span className="icon-sidebar">
              <AccountBalanceWalletIcon />
            </span>
            Income
          </Link>
          <Collapse in={open}>
            <div id="example-collapse-text2">
              <Link to={"/"}>Lorem</Link>
              <Link to={"/"}>Ipsum</Link>
              <Link to={"/"}>Test</Link>
            </div>
          </Collapse>
        </Nav.Item>
        <Nav.Item>
          <Link
            to={" "}
            className="nav-drop"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text3"
            aria-expanded={open}
          >
            <span className="icon-sidebar">
              <LocalOfferIcon />
            </span>
            Promote
          </Link>
          <Collapse in={open}>
            <div id="example-collapse-text3">
              <Link to={"/"}>Lorem</Link>
              <Link to={"/"}>Ipsum</Link>
              <Link to={"/"}>Test</Link>
            </div>
          </Collapse>
        </Nav.Item>
        <Nav.Item>
          <Link
            to={" "}
            className="nav-drop"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text4"
            aria-expanded={open}
          >
            <span className="icon-sidebar">
              <LiveHelpIcon />
            </span>
            Help
          </Link>
          <Collapse in={open}>
            <div id="example-collapse-text4">
              <Link to={"/"}>Lorem</Link>
              <Link to={"/"}>Ipsum</Link>
              <Link to={"/"}>Test</Link>
            </div>
          </Collapse>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavMenu;
