import React, { Component } from "react";
import Slider from "react-slick";

export class SlideShowTop extends Component {
  render() {
    const settingsBanner = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="section slideshow__top">
        <Slider {...settingsBanner}>
          <div className="slideshow__top__img">
            <a href="#">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/slideshow_image/Banner-Sale.jpg"
                }
                alt=""
              />
            </a>
          </div>
          <div className="slideshow__top__img">
            <a href="#">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/slideshow_image/banner_sale.jpg"
                }
                alt=""
              />
            </a>
          </div>
        </Slider>
      </section>
    );
  }
}

export default SlideShowTop;
