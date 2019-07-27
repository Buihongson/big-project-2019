import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: props.product
    };
  }

  render() {
    const { product } = this.state;

    return (
      <div className="box box--hidden">
        <div className="box__img">
          <Link to={`/product/details/${product.id}`}>
            <img
              src={product.hinh_anh}
              alt={product.ten_san_pham}
              style={{ width: "180px" }}
            />
          </Link>
        </div>
        <div className="box__body">
          <ul>
            <li className="box__body__name">
              <Link to={`/product/details/${product.id}`}>
                {product.ten_san_pham} {product.ma_san_pham} {product.gioi_tinh}{" "}
                {product.loai_day}
              </Link>
            </li>
            <li className="box__body__price">{product.gia_tien}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductItem;
