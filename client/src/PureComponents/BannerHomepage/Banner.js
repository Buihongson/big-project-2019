import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
      <section className="section banner">
          <div className="container">
            <div className="banner__img"><a href="#"><img src={ process.env.PUBLIC_URL +'images/banner_image/banner-thanh-lap.jpg' } alt=""/></a></div>
            <div className="banner__img"><a href="#"><img src={ process.env.PUBLIC_URL +'images/banner_image/banner-vi-tri.jpg' } alt=""/></a></div>
            <div className="banner__img"><a href="#"><img src={ process.env.PUBLIC_URL +'images/banner_image/banner-ky-thuat.jpg' } alt=""/></a></div>
          </div>
        </section>
    )
  }
}

export default Banner
