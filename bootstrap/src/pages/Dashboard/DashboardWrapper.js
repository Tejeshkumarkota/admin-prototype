import SearchIcon from "@mui/icons-material/Search";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { PiHandWavingFill } from "react-icons/pi";
import DashboardTiles from "./components/DashboardTiles/DahboardTiles";
import OverviewAndCustomers from "./components/OverviewAndCustomers/OverviewAndCustomers";
import TableContent from "./components/Table/Table";

const DashboardWrapper = () => {
  return (
    <>
      <div className="dashboard-screen">
        <Row>
          <Col sm={12} md={12} lg={12} className="mt-4">
            <Row>
              <Col sm={12} md={6} lg={6}>
                <h1 className="font-20 mb-4">
                  Hello Shahrukh{" "}
                  <span className="hand-icon">
                    {" "}
                    <PiHandWavingFill />{" "}
                  </span>
                  ,
                </h1>
              </Col>
              <Col sm={12} md={6} lg={6} className="d-flex justify-content-end">
                <InputGroup className="mb-3 dash-input-group">
                  <Button variant="outline-secondary" className="border-0">
                    <SearchIcon />
                  </Button>
                  <Form.Control placeholder="Search" className="border-0 shadow-none" />
                </InputGroup>
              </Col>
            </Row>
            <DashboardTiles />
            <OverviewAndCustomers />
            <TableContent />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardWrapper;
