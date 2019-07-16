import React, { Component } from "react";

export class LogoHP3 extends Component {
  render() {
    return (
      <section className="section logo">
        <div className="container">
          <ul className="logo__content">
            <li className="logo__item">
              <img
                src={process.env.PUBLIC_URL + "images/logo_image/citizen-2.png"}
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL + "images/logo_image/Logo-bulova.png"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={process.env.PUBLIC_URL + "images/logo_image/caravelle.png"}
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/SEIKO-1-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/LACOSTE-2-170x100.jpg"
                }
                alt=""
              />
              <a href="#" />
            </li>
            <li className="logo__item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "images/logo_image/CALVIN-KLEIN-2-170x100.jpg"
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

export default LogoHP3;
