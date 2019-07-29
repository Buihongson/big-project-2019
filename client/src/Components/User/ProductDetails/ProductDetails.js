import React, { Component } from "react";
import Slider from "react-slick";

import callApi from ".././../../Services/ApiServices";

import ProductItem from "../ProductItem/ProductItem";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: "",
      products: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.onGetDetails();
    this.onGetAllProducts();
  }

  // Func get product details
  onGetDetails = () => {
    const productId = this.props.match.params.id;

    callApi(`api/products/${productId}`, "GET", null).then(res =>
      this.setState({ product: res.data.data })
    );
  };

  // Func get all products
  onGetAllProducts = () => {
    callApi("api/products", "GET", null).then(res => {
      this.setState({ products: res.data.data });
    });
  };

  render() {
    const { product, products } = this.state;

    const filterSamrProduct = products.filter(data => {
      return data.nha_san_xuat_id === product.nha_san_xuat_id;
    });

    const elmSameProduct = filterSamrProduct
      .slice(0, 8)
      .map((product, index) => {
        return <ProductItem key={product.id} product={product} />;
      });

    // Custom slide
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <main className="main">
        <section className="section detail">
          <div className="container">
            <div className="detail__top">
              <div className="detail__column detail__column--left">
                <div
                  className="detail__img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img src={product.hinh_anh} alt="" style={{ width: "60%" }} />
                </div>
              </div>
              <div className="detail__column detail__column--right">
                <h1 className="detail__title">
                  {product.ten_san_pham} {product.ma_san_pham}{" "}
                  {product.gioi_tinh} {product.loai_day} {product.duong_kinh_vo}
                </h1>
                <div className="divider" />
                <div className="detail__price">{product.gia_tien}</div>
                <div className="detail__desc">{product.mo_ta}</div>
                <form action="">
                  <a
                    href="#"
                    className="detail__btn add-to-cart"
                    data-image="{ product.hinh_anh }"
                    data-name="{ product.ten_san_pham }{{ product.ma_san_pham } { product.gioi_tinh } { product.loai_day } { product.duong_kinh_vo }"
                    data-price="{ product.gia_tien }"
                  >
                    Thêm vào giỏ
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section detail">
          <div className="container">
            <div className="detail__bottom">
              <div className="detail__bottom__column detail__bottom__column--left">
                <h2 className="detail__bottom__title">
                  Chi tiết thông số kỹ thuật đồng hồ:
                </h2>
                <table>
                  <tbody>
                    <tr>
                      <td>Thương hiệu:</td>
                      <td>{product.ten_san_pham}</td>
                    </tr>
                    <tr>
                      <td>Mã sản phẩm:</td>
                      <td>{product.ma_san_pham}</td>
                    </tr>
                    <tr>
                      <td>Xuất xữ:</td>
                      <td>{product.xuat_su}</td>
                    </tr>
                    <tr>
                      <td>Giới tính:</td>
                      <td>{product.gioi_tinh}</td>
                    </tr>
                    <tr>
                      <td>Kính:</td>
                      <td>{product.kinh}</td>
                    </tr>
                    <tr>
                      <td>Đường kính vỏ:</td>
                      <td>{product.duong_kinh_vo}</td>
                    </tr>
                    <tr>
                      <td>Độ dày của vỏ:</td>
                      <td>{product.do_day_vo}</td>
                    </tr>
                    <tr>
                      <td>Độ chịu áp suất nước</td>
                      <td>{product.ap_suat_nuoc}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="detail__bottom__column detail__bottom__column--right">
                <img src={product.hinh_anh_infor} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section same__product">
          <div className="container">
            <h2 className="same__product__title">Sản phẩm tượng tự</h2>
            <div className="slideshow__prodhot">
              <Slider {...settings}>{elmSameProduct}</Slider>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
