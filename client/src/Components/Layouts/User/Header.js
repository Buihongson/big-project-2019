import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <section className="section header__top">
            <div className="header__toggle">
              <i className="fa fa-bars" id="toggle-main-menu" />
              <i className="fa fa-times hidden" id="toggle-active-main" />
            </div>
            <div className="header__logo">
              <Link to="/">
                <img
                  src="/images/frontend_image/logo-header.jpg"
                  style={{ width: 200 + "px", height: 62 + "px" }}
                  title="Đồng hồ cao cấp Thụy Sỹ chính hãng"
                />
              </Link>
            </div>
            <div className="header__input header__input--pc">
              <form>
                <div>
                  <input type="text" placeholder="Tìm kiếm…" name="search" />
                  <button
                    type="submit"
                    style={{ position: "absolute", top: 0, right: 0 }}
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className="header__info">
              <div className="header__info__right header__info--hidden">
                <ul>
                  <li className="header__info__item header__info__item--bold">
                    <a className="header__link" href="/signin">
                      <i
                        className="fa fa-user"
                        style={{ marginRight: 5 + "px" }}
                      />
                      Tài khoản
                    </a>
                  </li>
                  <li className="header__info__item header__info__item--divider">
                    |
                  </li>
                </ul>
              </div>
              <div className="header__info__left">
                <ul>
                  <li className="header__info__item header__info__item--bold">
                    <a className="header__link" href="/gio-hang">
                      Giỏ hàng (<span className="quantity-cart">0</span>)
                      <i
                        className="fa fa-shopping-cart"
                        style={{ marginLeft: 5 + "px" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="header__input header__input--mb">
          <form action="search.php" method="get">
            <input type="text" placeholder="Tìm kiếm…" name="search" />
            <a href="#">
              <i className="fa fa-search" />
            </a>
          </form>
        </div>
        {/* <nav className="menu menu--mb header__bottom hidden" id="menu--mb">
            <ul className="menu--mb__main">
                @loggedIn
                  <li className="menu--mb__main__item"><a className="header__link" href="/khach-hang/tai-khoan">Tài khoản <div className="menu--mb__icon__account"><i id="toggle-account" className="fa fa-chevron-down"></i><i id="toggle-active-account" className="hidden fa fa-times"></i></div></a>
                    <ul className="menu--mb__sub menu--mb__sub--one hidden" id="menu--mb__sub--account">
                      <li className="menu--mb__sub__item"><a href="/khach-hang/tai-khoan">Thông tin tài khoản</a></li>
                      <li className="menu--mb__sub__item"><a href="/khach-hang/tai-khoan/doi-mat-khau">Đổi mật khẩu</a></li>
                      <li className="menu--mb__sub__item"><a href="/logoutUser">Thoát</a></li>
                    </ul>
                  </li>
                @else
                  <li className="menu--mb__main__item"><a className="header__link" href="/signin">Tài khoản</a>
                  </li>
                @endloggedIn
                <li className="menu--mb__main__item"><a className="header__link" href="/thuong-hieu">Thương hiệu <div className="menu--mb__icon__one"><i id="toggle-one" className="fa fa-chevron-down"></i><i id="toggle-active-one" className="hidden fa fa-times"></i></div></a>
                  <ul className="menu--mb__sub menu--mb__sub--one hidden" id="menu--mb__sub--one">
                    <li className="menu--mb__sub__item"><a href="#" className="header__link">Đồng hồ citizen</a>
                      <ul className="menu--mb__sub__sub">
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-citizen/citizen-eco-drive">Citizen Eco-Drive</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-citizen/citizen-automatic">Citizen Automatic</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-citizen/citizen-quartz">Citizen Quartz</a></li>
                      </ul>
                    </li>
                    <li className="menu--mb__sub__item"><a href="#" className="header__link">Đồng hồ thụy sĩ</a>
                      <ul className="menu--mb__sub__sub">
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-thuy-si/movado">Đồng hồ Movado</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-thuy-si/longines">Đồng hồ Longines</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-thuy-si/gronava">Đồng hồ Grovana</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-thuy-si/omega">Đồng hồ Omega</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-thuy-si/tissot">Đồng hồ Tissot</a></li>
                      </ul>
                    </li>
                    <li className="menu--mb__sub__item"><a href="#" className="header__link">Đồng hồ chính hãng</a>
                      <ul className="menu--mb__sub__sub">
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-chinh-hang/bulova">Đồng hồ Bulova</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-chinh-hang/seiko">Đồng hồ Seiko</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-chinh-hang/caravelle">Đồng hồ Caravelle</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-chinh-hang/alfex">Đồng hồ Alfex</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-chinh-hang/lacoste">Đồng hồ Lacoste</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu--mb__main__item"><a className="header__link" href="/dong-ho-nam">Đồng hồ nam<div className="menu--mb__icon__two"><i id="toggle-two" className="fa fa-chevron-down"></i><i id="toggle-active-two" className="hidden fa fa-times"></i></div></i></a>
                  <ul className="menu--mb__sub menu--mb__sub--two hidden" id="menu--mb__sub--two">
                    <li className="menu--mb__sub__item">
                        <p className="header__link">Loại dây</p>
                        <ul className="menu--mb__sub__sub">
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/day-da">Dây da</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/day-kim-loai">Dây kim loại</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/thep-khong-ri">Thép không rỉ</a></li>
                        </ul>
                      </li>
                      <li className="menu--mb__sub__item">
                        <p className="header__link">Giá tiền</p>
                        <ul className="menu--mb__sub__sub">
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/min_price=0000000&max_price=4999999">Dưới 5 Triệu</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/min_price=5000000&max_price=15000000">5 Triệu – 15 Triệu</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/min_price=15000001&max_price=30000000">15 Triệu - 30 Triệu</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/max_price=30000001">Trên 30 Triệu</a></li>
                        </ul>
                      </li>
                      <li className="menu--mb__sub__item">
                        <p className="header__link">Thụy sĩ</p>
                        <ul className="menu--mb__sub__sub">
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/movado">Movado</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/longines">Longines</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="#">Grovana</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="#">Omega</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="#">Tissot</a></li>
                        </ul>
                      </li>
                      <li className="menu--mb__sub__item">
                        <p className="header__link">Thương hiệu</p>
                        <ul className="menu--mb__sub__sub">
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/bulova">Bulova</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nam/caravelle">Caravelle</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="#">Alfex</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="#">Seiko</a></li>
                          <li className="menu--mb__sub__sub__item"><a href="#">Lacoste</a></li>
                        </ul>
                      </li>
                  </ul>
                </li>
                <li className="menu--mb__main__item"><a className="header__link" href="/dong-ho-nu">Đồng hồ nữ <div className="menu--mb__icon__three"><i id="toggle-three" className="fa fa-chevron-down"></i><i id="toggle-active-three" className="hidden fa fa-times"></i></div></a>
                  <ul className="menu--mb__sub menu--mb__sub--three hidden" id="menu--mb__sub--three">
                    <li className="menu--mb__sub__item">
                      <p className="header__link">Loại dây<p>
                          <ul className="menu--mb__sub__sub">
                            <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/day-da">Dây da</a></li>
                            <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/day-kim-loai">Dây kim loại</a></li>
                            <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/thep-khong-ri">Thép không rỉ</a></li>
                          </ul>
                    </li>
                    <li className="menu--mb__sub__item">
                      <p className="header__link">Giá tiền</p>
                      <ul className="menu--mb__sub__sub">
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/min_price=0000000&max_price=4999999">Dưới 5 Triệu</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/min_price=5000000&max_price=15000000">5 Triệu – 15 Triệu</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/min_price=15000001&max_price=30000000">15 Triệu - 30 Triệu</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/max_price=30000001">Trên 30 Triệu</a></li>
                      </ul>
                    </li>
                    <li className="menu--mb__sub__item">
                      <p className="header__link">Thụy sĩ</p>
                      <ul className="menu--mb__sub__sub">
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/movado">Movado</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/longines">Longines</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="#">Grovana</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="#">Omega</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="#">Tissot</a></li>
                      </ul>
                    </li>
                    <li className="menu--mb__sub__item">
                      <p className="header__link">Thương hiệu</p>
                      <ul className="menu--mb__sub__sub">
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/bulova">Bulova</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="/dong-ho-nu/caravelle">Caravelle</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="#">Alfex</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="#">Seiko</a></li>
                        <li className="menu--mb__sub__sub__item"><a href="#">Lacoste</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu--mb__main__item"><a className="header__link" href="/sua-chua">Sữa chữa</i></a>
                </li>
                <li className="menu--mb__main__item"><a className="header__link" href="/lien-he">Liên hệ</i></a>
                </li>
              </ul>
          </nav> */}
        <nav className="menu menu--pc header__bottom">
          <ul className="menu__main">
            <li className="menu__main__item">
              <Link to="/brand" className="header__link">
                Thương hiệu
                <i className="fa fa-chevron-down" />
              </Link>
              <ul className="menu__sub menu__sub--one">
                <li className="menu__sub__item">
                  <a href="#" className="header__link">
                    Đồng hồ citizen
                  </a>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-citizen/citizen-eco-drive">
                        Citizen Eco-Drive
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-citizen/citizen-automatic">
                        Citizen Automatic
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-citizen/citizen-quartz">
                        Citizen Quartz
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu__sub__item">
                  <a href="#" className="header__link">
                    Đồng hồ thụy sĩ
                  </a>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-thuy-si/movado">Đồng hồ Movado</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-thuy-si/longines">Đồng hồ Longines</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-thuy-si/gronava">Đồng hồ Grovana</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-thuy-si/omega">Đồng hồ Omega</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-thuy-si/tissot">Đồng hồ Tissot</a>
                    </li>
                  </ul>
                </li>
                <li className="menu__sub__item">
                  <a href="#" className="header__link">
                    Đồng hồ chính hãng
                  </a>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-chinh-hang/bulova">Đồng hồ Bulova</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-chinh-hang/seiko">Đồng hồ Seiko</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-chinh-hang/caravelle">
                        Đồng hồ Caravelle
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-chinh-hang/alfex">Đồng hồ Alfex</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-chinh-hang/lacoste">Đồng hồ Lacoste</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu__main__item">
              <a className="header__link" href="/dong-ho-nam">
                Đồng hồ nam
                <i className="fa fa-chevron-down" />
              </a>
              <ul className="menu__sub menu__sub--two">
                <li className="menu__sub__item">
                  <p className="header__link">Loại dây</p>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/day-da">Dây da</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/day-kim-loai">Dây kim loại</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/thep-khong-ri">Thép không rỉ</a>
                    </li>
                  </ul>
                </li>
                <li className="menu__sub__item">
                  <p className="header__link">Giá tiền</p>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/min_price=0000000&max_price=4999999">
                        Dưới 5 Triệu
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/min_price=5000000&max_price=15000000">
                        5 Triệu – 15 Triệu
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/min_price=15000001&max_price=30000000">
                        15 Triệu - 30 Triệu
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/max_price=30000001">
                        Trên 30 Triệu
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu__sub__item">
                  <p className="header__link">Thụy sĩ</p>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/movado">Movado</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/longines">Longines</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Grovana</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Omega</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Tissot</a>
                    </li>
                  </ul>
                </li>
                <li className="menu__sub__item">
                  <p className="header__link">Thương hiệu</p>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/bulova">Bulova</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nam/caravelle">Caravelle</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Alfex</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Seiko</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Lacoste</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu__main__item">
              <a className="header__link" href="/dong-ho-nu">
                Đồng hồ nữ
                <i className="fa fa-chevron-down" />
              </a>
              <ul className="menu__sub menu__sub--three">
                <li className="menu__sub__item">
                  <p className="header__link">Loại dây</p>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/day-da">Dây da</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/day-kim-loai">Dây kim loại</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/thep-khong-ri">Thép không rỉ</a>
                    </li>
                  </ul>
                </li>
                <li className="menu__sub__item">
                  <p className="header__link">Giá tiền</p>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/min_price=0000000&max_price=4999999">
                        Dưới 5 Triệu
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/min_price=5000000&max_price=15000000">
                        5 Triệu – 15 Triệu
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/min_price=15000001&max_price=30000000">
                        15 Triệu - 30 Triệu
                      </a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/max_price=30000001">Trên 30 Triệu</a>
                    </li>
                  </ul>
                </li>
                <li className="menu__sub__item">
                  <p className="header__link">Thụy sĩ</p>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/movado">Movado</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/longines">Longines</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Grovana</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Omega</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Tissot</a>
                    </li>
                  </ul>
                </li>
                <li className="menu__sub__item">
                  <p className="header__link">Thương hiệu</p>
                  <ul className="menu__sub__sub">
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/bulova">Bulova</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="/dong-ho-nu/caravelle">Caravelle</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Alfex</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Seiko</a>
                    </li>
                    <li className="menu__sub__sub__item">
                      <a href="#">Lacoste</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu__main__item">
              <Link className="header__link" to="/fix">
                Sữa chữa
              </Link>
            </li>
            <li className="menu__main__item">
              <Link className="header__link" to="/contact">
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
