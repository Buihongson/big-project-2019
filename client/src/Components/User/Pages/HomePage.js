import React, { Component } from "react";

import Banner from "../../../PureComponents/BannerHomepage/Banner";
import SlideShowTop from "../../../PureComponents/SlideShow/SlideShowTop";
import SectionTitleHP1 from "../../../PureComponents/SectionTitle/SectionTitleHP1";
import SectionTitleHP2 from "../../../PureComponents/SectionTitle/SectionTitleHP2";
import SectionTitleHP3 from "../../../PureComponents/SectionTitle/SectionTitleHP3";
import SectionTitleHP4 from "../../../PureComponents/SectionTitle/SectionTitleHP4";
import LogoHP1 from "../../../PureComponents/LogoHompage/LogoHP1";
import LogoHP2 from "../../../PureComponents/LogoHompage/LogoHP2";
import LogoHP3 from "../../../PureComponents/LogoHompage/LogoHP3";
import Service from "../../../PureComponents/ServiceHompage/Service";

export class HomePage extends Component {
  render() {
    return (
      <main className="main">
        {/* Slideshow top */}
        <SlideShowTop />

        {/* Banner  */}
        <Banner />

        {/* title đh thụy sĩ */}
        <SectionTitleHP1 />

        {/* <!--  product hot đh thụy sĩ  --> */}
        <section className="section prodhot">
          <div className="container slideshow__prodhot">
            <article className="box">
              <div className="box__img">
                <a href="{{ route('User/DongHoController.viewDetailDHNam', {id: product.id}) }}">
                  <img
                    src="{{ product.hinh_anh }}"
                    alt="{ product.ten_san_pham }"
                  />
                </a>
              </div>
              <div className="box__body">
                <ul>
                  {/* <li className="box__body__name"><a href="{{ route('User/DongHoController.viewDetailDHNam', {id: product.id}) }}">{{ product.ten_san_pham }} {{ product.ma_san_pham }}</a></li> */}
                  {/* <li className="box__body__price" style="color: #000">{{ product.gia_tien }}</li> */}
                </ul>
              </div>
            </article>
          </div>
        </section>
        {/* <!--  end product hot đh thụy sĩ  --> */}

        {/* logo đh thụy sĩ */}
        <LogoHP1 />
        <LogoHP2 />

        {/* title đh citizen */}
        <SectionTitleHP2 />

        {/* <!--  product hot đh citizen  --> */}
        <section className="section prodhot">
          <div className="container slideshow__prodhot">
            <article className="box">
              <div
                className="box__img"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <a href="{{ route('User/DongHoController.viewDetailDHNam', {id: product.id}) }}">
                  <img
                    src="{{ product.hinh_anh }}"
                    alt="{ product.ten_san_pham }"
                    style={{ width: "55%" }}
                  />
                </a>
              </div>
              <div className="box__body">
                <ul>
                  {/* <li className="box__body__name"><a href="{{ route('User/DongHoController.viewDetailDHNam', {id: product.id}) }}">{{ product.ten_san_pham }} {{ product.ma_san_pham }}</a></li> */}
                  {/* <li className="box__body__price" style="color: #000">{{ product.gia_tien }}</li> */}
                </ul>
              </div>
            </article>
          </div>
        </section>
        {/* <!--  end product hot đh citizen  --> */}

        {/* title đh chính hãng */}
        <SectionTitleHP3 />

        {/* <!--  product hot đh chính hãng  --> */}
        <section className="section prodhot">
          <div className="container slideshow__prodhot">
            <article className="box">
              <div
                className="box__img"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <a href="{{ route('User/DongHoController.viewDetailDHNam', {id: product.id}) }}">
                  <img
                    src="{{ product.hinh_anh }}"
                    alt="{ product.ten_san_pham }"
                  />
                </a>
              </div>
              <div className="box__body">
                <ul>
                  {/* <li className="box__body__name"><a href="{{ route('User/DongHoController.viewDetailDHNam', {id: product.id}) }}">{{ product.ten_san_pham }} {{ product.ma_san_pham }}</a></li> */}
                  {/* <li className="box__body__price" style="color: #000">{{ product.gia_tien }}</li> */}
                </ul>
              </div>
            </article>
          </div>
        </section>
        {/* <!--  end product hot đh chính hãng  --> */}

        {/*logo dh citizen vs chính hãng */}
        <LogoHP3 />

        {/* Section title */}
        <SectionTitleHP4 />

        {/* <!-- section service --> */}
        <section className="section service">
          <Service />
        </section>
      </main>
    );
  }
}

export default HomePage;
