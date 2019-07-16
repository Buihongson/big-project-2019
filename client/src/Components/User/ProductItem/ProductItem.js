import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <article className="box box--hidden">
        <div className="box__img">
          <a href="{{ route('User/DongHoController.viewDetailDHNam', {id: product.id}) }}">
            <img
              src="{{ product.hinh_anh }}"
              alt="{{ product.ten_san_pham }}"
              style="width: 240px;"
            />
          </a>
        </div>
        <div className="box__body">
          <ul>
            {/* <li className="box__body__name"><a href="{{ route('User/DongHoController.viewDetailDHNam', {id: product.id}) }}">{{ product.ten_san_pham }} {{ product.ma_san_pham }} {{ product.gioi_tinh }} {{ product.loai_day }} </a></li> */}
            {/* <li className="box__body__price">{{ product.gia_tien }}</li> */}
          </ul>
        </div>
      </article>
    );
  }
}

export default ProductItem;
