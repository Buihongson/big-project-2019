import React, { Component } from "react";

export class ContactPage extends Component {
  render() {
    return (
      <main className="main">
        <div className="container contact">
          <section className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1031399691506!2d108.20760301416975!3d16.060136743949116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b4239d8e51%3A0x96e408c6b0419760!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBEdXkgVMOibg!5e0!3m2!1svi!2s!4v1557421842842!5m2!1svi!2s"
              style={styleIframe}
            />
          </section>

          <h2 className="contact__title">
            <b />
            Tại sao nên chọn đồng hồ của chúng tôi?
            <b />
          </h2>

          <section className="contact__selection">
            <article className="contact__selection__content">
              <h3 className="contact__selection__content__title">
                Dịch vụ sau bán
              </h3>
              <div className="contact__selection__content__body">
                <p>
                  ? Đảm bảo hài lòng, TanGuarantee.
                  <br />? Buổi tư vấn miễn phí với chuyên viên về các đặc tính
                  kỹ thuật của đồng hồ.
                  <br />
                  ?Chính sách bảo hành 5 năm!
                </p>
              </div>
            </article>
            <article className="contact__selection__content">
              <h3 className="contact__selection__content__title">
                CHẤT LƯỢNG CAO
              </h3>
              <div className="contact__selection__content__body">
                <p>
                  Đồng hồ Tân Tân là nhà nhập khẩu trực tiếp của nhiều hãng đồng
                  hồ Thuỵ Sĩ – Nhật Bản danh tiếng, chất lượng luôn được kiểm
                  soát chặt chẽ theo chuẩn ISO9001.!
                </p>
              </div>
            </article>
            <article className="contact__selection__content">
              <h3 className="contact__selection__content__title">
                SỬA CHỮA CHUẨN SWISS
              </h3>
              <div className="contact__selection__content__body">
                <p>
                  Thành lập 1985, Tân Tân đang đứng đầu Việt Nam về số lượng sửa
                  chữa đồng hồ. Cam kết xử lý 100% vấn đề bạn lo lắng.
                </p>
              </div>
            </article>
            <article className="contact__selection__content">
              <h3 className="contact__selection__content__title">
                ĐỊA ĐIỂM THUẬN TIỆN
              </h3>
              <div className="contact__selection__content__body">
                <p>
                  Tọa lạc tại các vị trí trung tâm số 1 TP.HCM (Quận 1), quý
                  khách có thể dễ dàng tìm đến, thuận lợi cho việc mua sắm.
                </p>
              </div>
            </article>
          </section>

          <h2 className="contact__title">
            <b />
            Trung tâm bảo hành sửa chữa
            <b />
          </h2>

          <section className="contact__repair">
            <div className="contact__repair__content contact__repair--left">
              <p>
                <strong>Địa chỉ: </strong>254 Nguyễn Văn Linh, Thạc Gián, Thanh
                Khê, Đà Nẵng
              </p>
              <p>
                <strong>Điện thoại: </strong>
                <a href="tel:02838218297">028 3821 8297</a>
              </p>
              <p>
                <strong>Hotline (miễn cước): </strong>
                <a href="tel:18009027">1800 9027</a> hoặc{" "}
                <a href="tel:0934345102">0394 345 102</a>
              </p>
              <p>
                <strong>Thời gian nhận sửa chữa: </strong>Từ 9h đến 18h mỗi ngày
              </p>
              <p>
                <strong>Chuyên sửa chữa các dòng đồng hồ: </strong>OMEGA –
                LONGINES – RADO –GUCCI – RAYMOND WEIL – MIDO – TISSOT – MOVADO –
                CITIZEN – BULOVA – ALFEX và những thương hiệu nổi tiếng khác.{" "}
                <strong>
                  Gọi <a href="tel:18009027">1800 9027</a> để được tư vấn chi
                  tiết
                </strong>
              </p>
            </div>
            <div className="contact__repair__content contact__repair--right">
              <img src="/images/banner_image/Sua-Dong-Ho.jpg" alt="" />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

const styleIframe = {
  width: "100%",
  height: "100%",
  frameborder: "0",
  border: "0"
};

export default ContactPage;
