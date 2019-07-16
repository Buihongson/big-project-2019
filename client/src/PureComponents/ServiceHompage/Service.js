import React, { Component } from "react";

export class Service extends Component {
  render() {
    return (
      <div className="container service__body">
        <article className="service__box">
          <div className="service__box__icon">
            <i className="fa fa-history" />
          </div>
          <div className="service__box__title">UY TÍN NHẤT TRONG NGÀNH</div>
          <div className="service__box__content">
            <ul>
              <li>
                Chúng tôi là nhà phân phối lâu năm và uy tín nhất hơn 30 năm
                qua.
              </li>
              <li>
                Chúng tôi am hiểu chuyên sâu về kỹ thuật, dịch vụ và bảo hành
                sau bán sẽ làm khách hàng hài lòng .
              </li>
            </ul>
          </div>
        </article>
        <article className="service__box">
          <div className="service__box__icon">
            <i className="fa fa-folder-open" />
          </div>
          <div className="service__box__title">Dịch vụ bảo trì sau bán</div>
          <div className="service__box__content">
            <ul>
              <li>
                Chúng tôi có chế độ hậu mãi sau bán tốt nhất hiện nay với đội
                ngũ kỹ thuật được huấn luyện bới các chuyên gia của các hãng
                đồng hồ nổi tiếng{" "}
              </li>
              <li>
                Chúng tôi có phòng sữa chữa được trang bị theo tiêu chuẩn quốc
                tế.
              </li>
            </ul>
          </div>
        </article>
        <article className="service__box">
          <div className="service__box__icon">
            <i className="fa fa-sync" />
          </div>
          <div className="service__box__title">Thuận tiện mua sắm</div>
          <div className="service__box__content">
            <ul>
              <li>
                Cửa hàng của chúng tôi tọa lạc tại trung tâm thành phố Quận 1,
                TP Hồ Chí Minh
              </li>
              <li>
                Các trung tâm thương mại ( Diamond Plaza, Saigon Center..) thuận
                tiện cho khách đi đến mua sắm.
              </li>
            </ul>
          </div>
        </article>
        <article className="service__box">
          <div className="service__box__icon">
            <i className="fa fa-credit-card" />
          </div>
          <div className="service__box__title">Thành toán - đổi hàng</div>
          <div className="service__box__content">
            <ul>
              <li>
                '...' hỗ trợ bạn đổi hàng dễ dàng trong vòng 7 ngày khi mua đồng
                hồ tại hệ thống Tân Tân.
              </li>
              <li>
                Tại tất cả cửa hàng hệ thống đồng hồ Tân Tân đề hỗ trợ bạn thanh
                toán thông minh qua nhiều hình thức: visa, master card … khi mua
                và sử dụng dịch vụ.
              </li>
            </ul>
          </div>
        </article>
        <article className="service__box">
          <div className="service__box__icon">
            <i className="fa fa-shopping-basket" />
          </div>
          <div className="service__box__title">Giao hàng tại nhà</div>
          <div className="service__box__content">
            <ul>
              <li>Bạn ở tỉnh? Bạn không có thời gian ra cửa hàng mua sắm ?</li>
              <li>Bạn đang muốn mua đồng hồ làm quà cho bạn bè, người thân.</li>
              <li>
                '...' sẽ hỗ trợ bạn giao hàng và thu tiền tại nhà. (Bạn được
                kiểm tra đồng hồ trước khi thanh toán)
              </li>
            </ul>
          </div>
        </article>
        <article className="service__box">
          <div className="service__box__icon">
            <i className="fa fa-cogs" />
          </div>
          <div className="service__box__title">Sửa chữa chuyện nghiệp</div>
          <div className="service__box__content">
            <ul>
              <li>
                Chúng tôi có đội ngũ kỹ thuật tay nghề cao và chuyên nghiệp.
              </li>
              <li>
                Chúng tôi có kinh nghiệm lâu năm trong sữa chữa, bảo trì lâu năm
                cho các hãng thương hiệu nổi tiếng: ROLEX, OMEGA, LONGINES,
                MOVADO, TISSOT, RAYMOND WEIL ..
              </li>
            </ul>
          </div>
        </article>
      </div>
    );
  }
}

export default Service;
