import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ViewCodePopup from "../ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../ViewCodeButton/ViewCodeButton";
import { CardViewSource } from "../../ViewCodeData/ViewCodeData";

const CardBootstrap = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12}>
          <Row className="mb-2">
            <Col xs={12} sm={12} md={7}>
              <h1 className="fw-medium font-22">Card</h1>
            </Col>
            <Col xs={12} sm={12} md={5} className="text-end">
              <ViewCodeButton show={show} setShow={setShow} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card>
                        <Card.Img 
                            variant="top" 
                            src="https://www.nobleui.com/html/template/assets/images/others/placeholder.jpg" 
                            alt="Card Image"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" className="text-uppercase font-12 py-2 px-4 rounded d-block">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card>
                        <Card.Img 
                            variant="top" 
                            src="https://www.nobleui.com/html/template/assets/images/others/placeholder.jpg" 
                            alt="Card Image"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" className="text-uppercase font-12 py-2 px-4 rounded d-block">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card>
                        <Card.Img 
                            variant="top" 
                            src="https://www.nobleui.com/html/template/assets/images/others/placeholder.jpg" 
                            alt="Card Image"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" className="text-uppercase font-12 py-2 px-4 rounded d-block">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Card>
                        <Card.Img 
                            variant="top" 
                            src="https://www.nobleui.com/html/template/assets/images/others/placeholder.jpg" 
                            alt="Card Image"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" className="text-uppercase font-12 py-2 px-4 rounded d-block">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <ViewCodePopup show={show} setShow={setShow} NavData={CardViewSource} />
    </>
  );
};

export default CardBootstrap;
