import { Col, Row } from "react-bootstrap";
import CustomersCard from "./CustomersCard/CustomersCard";
import OverviewCard from "./OverviewCard/OverviewCard";

const OverviewAndCustomers = () => {
  return (
    <>
      <div>
        <Row className="grid-match">
          <Col sm={12} xs={12} md={12} lg={8}>
            <OverviewCard />
          </Col>
          <Col sm={12} xs={12} md={12} lg={4}>
            <CustomersCard />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OverviewAndCustomers;
