import React from "react";
import Carousel from "react-bootstrap/Carousel";

class BackgroundCarousel extends React.Component {
  render() {
    const { images } = this.props;
    const style = {
      height: "100vh",
      width: "100%"
    };
    return (
      <div className="background-carousel">
        <Carousel controls={false}>
          {images.map((image, i) => {
            return (
              <Carousel.Item style={style}>
                <img className="d-block w-100" src={image} alt={i} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
export default BackgroundCarousel;
