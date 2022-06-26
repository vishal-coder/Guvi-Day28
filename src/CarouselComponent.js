import React from "react";
import Carousel from "react-bootstrap/Carousel";
import shoppingSale from "./shoppingSale.jpg";

function CarouselComponent() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block min-vw-100  "
            src={shoppingSale}
            alt="First slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Biggest Sale of Year</h3>
            <h4>Get extra 10% discount on SBI Cards .</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
