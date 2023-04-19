import { Row, Col, Card, Button } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import BootstrapSimpleCarousel from "./BootstrapSimpleCarousel/BootstrapSimpleCarousel"
import OwlCarousel from "./OwlCarousel/OwlCarousel"
import SlickSlider from "./SlickSlider/SlickSlider"

const CarouselBootstrap = () => {
  return (
    <>
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12}>
          <Row className="mb-2">
            <Col xs={12} sm={12} md={7}>
              <h1 className="fw-medium font-22">Carousel</h1>
            </Col>
            <Col xs={12} sm={12} md={5} className="text-end">
              <Button
                variant="outline-primary"
                type="button"
                className="py-1 px-2 btn-sm"
              >
                <BsCodeSlash />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <Card>
                <Card.Body>
                    <h1 className="fw-medium font-16">Bootstrap Carousel</h1>
                    <BootstrapSimpleCarousel />
                    <h1 className="fw-medium font-16">Owl Carousel</h1>
                    <OwlCarousel />
                    <h1 className="fw-medium font-16">Slick Slider</h1>
                    <SlickSlider />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CarouselBootstrap;
