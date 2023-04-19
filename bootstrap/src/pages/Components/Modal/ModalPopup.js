import { useState } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import CustomModal from "../Modal/CustomModal/CustomModal";
import { BsCodeSlash } from "react-icons/bs";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";

const ModalPopup = () => {
  const [show, setShow] = useState(false);

  const NavData = [
    {
      title: "Bootstrap Modal",
      imports: 'import { Modal, Button } from "react-bootstrap" import { useState } from "react";',
      show_content: `const [show, setShow] = useState(false);
        const handleShowClose = () => setShow(!show);
        
        <Button onClick={handleShowClose} variant="primary" type="button" className="text-uppercase font-12 py-2 px-4 d-inline-block rounded">
            Bootstrap Modal
        </Button>

        <Modal size="lg" show={show} className='custom-modal' onHide={handleShowClose}>
            <Modal.Header closeButton>
                <Modal.Title>Bootstrap Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" className='text-uppercase font-12 d-inline-block py-2 px-4 rounded' onClick={handleShowClose}>
                    Cancel
                </Button>
                <Button variant="primary" className='text-uppercase font-12 py-2 px-4 d-inline-block rounded ms-2' onClick={handleShowClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>`,
    },
  ];

  return (
    <>
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12}>
          <Row className="mb-2">
            <Col xs={12} sm={12} md={7}>
              <h1 className="fw-medium font-22">Modal</h1>
            </Col>
            <Col xs={12} sm={12} md={5} className="text-end">
              {/* <Button onClick={handleShow} variant="outline-primary" type="button" className="py-1 px-2 btn-sm">
                                <BsCodeSlash />
                            </Button> */}
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

      {/* <Modal size="xl" show={show} className='custom-modal' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>View Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal> */}
      <ViewCodePopup show={show} setShow={setShow} NavData={NavData} />
    </>
  );
};

export default ModalPopup;
