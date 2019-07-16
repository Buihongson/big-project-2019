import React, { Component } from "react";

export class LogoHP2 extends Component {
  render() {
    return (
      <section className="section logo">
        <div className="container">
          <ul className="logo__content">
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/ALFEX-2-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/GROVANA-2-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/ENICAR-2-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/GUCCI-2-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/RAYMOND-WEIL-2-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/FREDERIQUE-2-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default LogoHP2;
