import { useState } from "react";
import { Modal, Nav } from "react-bootstrap";
import CodeSyntaxHighlighter from "../CodeSyntaxHighlighter/CodeSyntaxHighlighter";

const ViewCodePopup = ({ show, setShow, NavData, children }) => {

  const [dispayContent, setDispayContent] = useState(0);

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
          <Nav 
            justify 
            variant="tabs" 
            className="popup-nav-code mb-3" 
            defaultActiveKey={NavData[0].link}
          >
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
          {/* <div className="my-3 view-code-bg-theme p-3"> */}
            <h6 className="">
              How to Import
            </h6>
            <CodeSyntaxHighlighter code={NavData[dispayContent].imports} />
          {/* </div> */}
          {/* <div className="view-code-bg-theme p-3"> */}
            <CodeSyntaxHighlighter code={NavData[dispayContent].show_content} />
          {/* </div> */}
          </>
          }
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewCodePopup;
