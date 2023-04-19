import { useState } from "react";
import { Modal, Nav } from "react-bootstrap";

const ViewCodePopup = ({ show, setShow, NavData, children }) => {
  // const handleShowClose = () => setShow(!show);
  const [dispayContent, setDispayContent] = useState(0);
  console.log(NavData);
  return (
    <>
      <Modal
        size="xl"
        show={show}
        className="custom-modal"
        onHide={() => setShow(!show)}
      >
        <Modal.Header closeButton>
          <Modal.Title>View Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>

         {NavData && <>
          <Nav justify variant="tabs" className="popup-nav-code" defaultActiveKey={NavData[0].link}>
            {NavData.map((data, index) => {
              return (
                <Nav.Item>
                  <Nav.Link
                    className={dispayContent == index ? "active" : ""}
                    onClick={() => setDispayContent(index)}
                  >
                    {data.title}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>

          <div className="view-code-bg-theme p-3 mt-4">
            {NavData[dispayContent].show_content}
          </div>
          </>
          }
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewCodePopup;
