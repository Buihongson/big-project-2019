import React, { Component } from "react";

import callApi from "../../../../Services/ApiServices";
import "./BrandPage.css";

import SectionTitleHP1 from "../../../../PureComponents/SectionTitle/SectionTitleHP1";
import SectionTitleHP3 from "../../../../PureComponents/SectionTitle/SectionTitleHP3";
import LogoHP1 from "../../../../PureComponents/LogoHompage/LogoHP1";
import LogoHP2 from "../../../../PureComponents/LogoHompage/LogoHP2";
import LogoHP3 from "../../../../PureComponents/LogoHompage/LogoHP3";
import ProductItem from "../../ProductItem/ProductItem";

export default class BrandPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      visible: 8
    };
  }

  // Lifecycle
  componentDidMount() {
    this.onGetProducts();
  }

  // Func get product
  onGetProducts = () => {
    callApi("api/products", "GET", null).then(res =>
      this.setState({ products: res.data.data })
    );
  };

  // Func load more products
  onLoadMore = prev => {
    this.setState(prev => {
      return { visible: prev.visible + 4 };
    });
  };

  render() {
    const { products, visible } = this.state;

    const elmProduct = products.slice(0, visible).map((product, index) => {
      return <ProductItem key={product.id} product={product} />;
    });

    return (
      <div>
        <main className="main">
          <section className="section info">
            <div className="container">
              <h1 className="info__title">Thương hiệu</h1>
            </div>
          </section>
          <SectionTitleHP1 />
          <LogoHP1 />
          <LogoHP2 />
          <SectionTitleHP3 />
          <LogoHP3 />
          <section className="container section filter">
            <div className="filter__item">
              <div className="filter__item__title">Lọc Giá</div>
              <ul className="filter--hover">
                <li>
                  <a href="/thuong-hieu/min_price=0000000&max_price=4999999">
                    Dưới 5 Triệu
                  </a>
                </li>
                <li>
                  <a href="/thuong-hieu/min_price=5000000&max_price=15000000">
                    5 Triệu – 15 Triệu
                  </a>
                </li>
                <li>
                  <a href="/thuong-hieu/min_price=15000001&max_price=30000000">
                    3 Triệu - 30 Triệu
                  </a>
                </li>
                <li>
                  <a href="/thuong-hieu/max_price=30000001">Trên 30 Triệu</a>
                </li>
              </ul>
            </div>
            <div className="filter__item">
              <div className="filter__item__title">Giới Tính</div>
              <ul className="filter--hover">
                <li>
                  <a href="/thuong-hieu/nam">Nam</a>
                </li>
                <li>
                  <a href="/thuong-hieu/nu">Nữ</a>
                </li>
              </ul>
            </div>
            <div className="filter__item">
              <div className="filter__item__title">Loại dây</div>
              <ul className="filter--hover">
                <li>
                  <a href="/thuong-hieu/day-da">Dây da</a>
                </li>
                <li>
                  <a href="/thuong-hieu/day-kim-loai">Dây kim loại</a>
                </li>
                <li>
                  <a href="/thuong-hieu/thep-khong-ri">Thép không rỉ</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="container section product">
            <div className="product__body">{elmProduct}</div>
            <div className="btn__loadmore">
              {visible < products.length && (
                <button
                  type="button"
                  className="btn__load"
                  onClick={this.onLoadMore}
                >
                  Xem thêm
                </button>
              )}
            </div>
          </section>
        </main>
      </div>
    );
  }
}
