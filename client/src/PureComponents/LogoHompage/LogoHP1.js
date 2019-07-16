import React, { Component } from "react";

export class LogoHP1 extends Component {
  render() {
    return (
      <section className="section logo">
        <div className="container">
          <ul className="logo__content">
            <li className="logo__item">
              <img
                src={process.env.PUBLIC_URL + "images/logo_image/omega.png"}
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={process.env.PUBLIC_URL + "images/logo_image/longines.png"}
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/Logo165x97-02-1.png"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/RADO-2-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={process.env.PUBLIC_URL + "images/logo_image/mido.png"}
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={process.env.PUBLIC_URL + "images/logo_image/tissot.png"}
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

export default LogoHP1;
