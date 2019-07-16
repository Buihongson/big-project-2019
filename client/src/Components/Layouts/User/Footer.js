import React, { Component } from "react"

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
            <section className="footer__top">
                <article className="footer__box">
                    <h3 className="footer__title">HỖ TRỢ KHÁCH HÀNG</h3>
                    <div className="footer__divider--small"></div>
                    <div className="footer__logo">
                        <a href="/#">
                            <img src="/images/frontend_image/ft-logo.png" />
                        </a>
                    </div>
                    <div className="footer__divider--small"></div>
                    <div className="footer__txt">
                        <p>(Call, Viber,Zalo) <a href="">0912825773</a></p>
                        <p>Email tranducanh.212@gmail.com</p>
                    </div>
                </article>
                <article className="footer__box">
                    <h3 className="footer__title">CHÍNH SÁCH TÂN TÂN</h3>
                    <div className="footer__divider--small"></div>
                    <div className="footer__nav">
                        <ul>
                            <li><a href="">Câu hỏi Xoay Quanh Đồng Hồ.</a></li>
                            <li><a href="">Chính Sách Bảo Hành.</a></li>
                            <li><a href="">Chính Sách Đổi Hàng.</a></li>
                            <li><a href="">Chính Sách Bảo Mật.</a></li>
                            <li><a href="">Hướng Dẫn Mua Hàng.</a></li>
                            <li><a href="">Bảo Hành Và Sửa Chữa.</a></li>
                        </ul>
                    </div>
                </article>
                <article className="footer__box">
                    <h3 className="footer__title">CHỨNG NHẬN</h3>
                        <div className="footer__divider--small"></div>
                        <div className="footer__img">
                            <div className="footer__img__item">
                                <img src="/images/frontend_image/citizen-1.png" />
                            </div>
                            <div className="footer__img__item">
                                <img src="/images/frontend_image/movado.png" />
                            </div>
                            <div className="footer__img__item">
                                <img src="/images/frontend_image/bulova.png" />
                            </div>
                            <div className="footer__img__item">
                                <img src="/images/frontend_image/tt.png" />
                            </div>
                        </div>
                </article>
            </section>

            <section className="footer__address">
                <article className="footer__box footer__box--dash">
                    <div className="footer__address__title">
                        <p> <span>Tân Tân – Lý Tự Trọng </span></p>
                    </div>
                    <div className="address-content">
                        <a href="">285 Lý Tự Trọng, Q.1, TPHCM (Xem Map)</a>
                        <p>CITIZEN – BULOVA – CARAVELLE-MOVADO – TISSOT-GROVANA</p>
                        <p></p>
                    </div>
                </article>
                <article className="footer__box footer__box--dash">
                    <div className="footer__address__title">
                        <p> <span>Tân Tân – Lý Tự Trọng </span></p>
                    </div>
                    <div className="address-content">

                        <a href="">48 Lê Lợi, Q.1, TPHCM (Xem Map)</a>
                        <p>LONGINES – MOVADO – TISSOT – MIDO – GROVANA – ENICAR – ALFEX – CARAVELLE</p>
                        <p></p>
                    </div>
                </article>

                <article className="footer__box footer__box--dash">
                    <div className="footer__address__title">
                        <p><span>Tân Tân – Lê Lai</span></p>
                    </div>
                    <div className="address-content">
                        <a href="">52 Lê Lai, Q.1, TPHCM (Xem Map)</a>
                        <p>MOVADO – TISSOT – CITIZEN – BULOVA – ALFEX – CARAVELLE – GROVANA</p>
                        <p></p>
                    </div>
                </article>
                <article className="footer__box footer__box--dash">
                    <div className="footer__address__title">
                        <p><span>Tân Tân – SWISS LIMITED</span></p>
                    </div>
                    <div className="address-content">
                        <a href="">34 Lê Duẩn, Quận 1, TPHCM (Xem Map)</a>
                        <p>OMEGA – RADO –GUCCI – RAYMOND WEIL – MIDO – ENICAR – BULOVA</p>
                        <p></p>
                    </div>
                </article>

                <article className="footer__box footer__box--dash">
                    <div className="footer__address__title">
                        <p><span>Tân Tân – Diamond</span></p>
                    </div>
                    <div className="address-content">
                        <a href="">34 Lê Duẩn, Quận 1, TPHCM (Xem Map)</a>
                        <p>MOVADO – CITIZEN – TISSOT – BULOVA – ALFEX – GROVANA– ENICAR – SEIKO – CARAVELLE</p>
                        <p></p>
                    </div>
                </article>
                <article className="footer__box footer__box--dash">
                    <div className="footer__address__title">
                        <p><span>Tân Tân – Sài Gòn Center</span></p>
                    </div>
                    <div className="address-content ">
                        <a href="">65 Lê Lợi, Quận 1, TPHCM (Xem Map)</a>
                        <p>MOVADO – CITIZEN – TISSOT – BULOVA – ALFEX – ENICAR – CALVIN KLEIN – MIDO – CARAVELLE</p>
                        <p></p>
                    </div>
                </article>
            </section>

            <section className="footer__widgets">
                <div className="footer__widgets--right">
                <ul>
                    <li><i className="fa fa-cc-visa"></i></li>
                    <li><i className="fa fa-cc-paypal"></i></li>
                    <li><i className="fa fa-cc-mastercard"></i></li>
                </ul>
                </div>

                <div className="footer__widgets--left">
                <p>Copyright © Đồng hồ Tân Tân Since 1985 - Giấy chứng nhận ĐKKD số: 0303078213<br /> <strong> CÔNG TY TNHH TM
                    DV TRÍ LINH</strong></p>
                <img src="/images/logo_image/bo-cong-thuong.png" alt="" />
                </div>
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer
