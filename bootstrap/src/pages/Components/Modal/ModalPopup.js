import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CustomModal from "../Modal/CustomModal/CustomModal";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { ModalPopupViewSource } from "../../ViewCodeData/ViewCodeData";

const ModalPopup = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12}>
          <Row className="mb-2">
            <Col xs={12} sm={12} md={7}>
              <h1 className="fw-medium font-22">Modal</h1>
            </Col>
            <Col xs={12} sm={12} md={5} className="text-end">
              <ViewCodeButton show={show} setShow={setShow} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Card>
            <Card.Body>
              {/* <BootstrapModal /> */}
              <CustomModal />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ViewCodePopup show={show} setShow={setShow} NavData={ModalPopupViewSource} />
    </>
  );
};

export default ModalPopup;
