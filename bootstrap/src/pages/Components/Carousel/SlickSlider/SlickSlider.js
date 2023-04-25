import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12} className="px-4">
          <Slider {...settings} className="blue">
            <div>
              <h4 className="d-flex align-items-center justify-content-center p-4">1</h4>
            </div>
            <div>
              <h4 className="d-flex align-items-center justify-content-center p-4">2</h4>
            </div>
            <div>
              <h4 className="d-flex align-items-center justify-content-center p-4">3</h4>
            </div>
            <div>
              <h4 className="d-flex align-items-center justify-content-center p-4">4</h4>
            </div>
            <div>
              <h4 className="d-flex align-items-center justify-content-center p-4">5</h4>
            </div>
            <div>
              <h4 className="d-flex align-items-center justify-content-center p-4">6</h4>
            </div>
            <div>
              <h4 className="d-flex align-items-center justify-content-center p-4">7</h4>
            </div>
            <div>
              <h4 className="d-flex align-items-center justify-content-center p-4">8</h4>
            </div>
          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default SlickSlider;
