import { Row, Col, Carousel } from "react-bootstrap";

const BootstrapSimpleCarousel = () => {
  return (
    <>
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://exalogic-store.s3.us-east-2.amazonaws.com/admin-prototype/react/images/bannerphoto.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://exalogic-store.s3.us-east-2.amazonaws.com/admin-prototype/react/images/bannerphoto.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://exalogic-store.s3.us-east-2.amazonaws.com/admin-prototype/react/images/bannerphoto.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default BootstrapSimpleCarousel;
