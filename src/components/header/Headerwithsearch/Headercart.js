import React, { Component } from "react";

class Headercart extends Component {
  render() {
    return (
      <div className="header_cart">
        <div className="header_cart-wrap">
          <i className="header_cart-icon fas fa-shopping-cart" size="100px"></i>
          <span className="header_cart-notice">3</span>
          {/* No Cart: header_cart-list--no-cart */}
          <div className="header_cart-list">
            <img
              src={require("../../../assets/image/no_cart.png")}
              alt="Không sản phẩm"
              className="header_cart-no-cart-img"
            />
            <h3 className="header_cart-heading">Sản phẩm đã thêm</h3>
            <ul className="header_cart-list-item">
              {/* Cart item */}
              <li className="header_cart-item">
                <img
                  src={require("../../../assets/image/tui_xach.png")}
                  alt="Tui xach"
                  className="header_cart-img"
                />
                <div className="header_cart-item-info">
                  <div className="header_cart-item-head">
                    <h5 className="header_cart-item-name">
                      Bộ túi sách hàng hiệu
                    </h5>
                    <div className="header_cart-item-price-wrap">
                      <span className="header_cart-item-price">
                        2,000,000 đ
                      </span>
                      <span className="header_cart-item-multiply">x</span>
                      <span className="header_cart-item-qnt">1</span>
                    </div>
                  </div>
                  <div className="header_cart-item-body">
                    <span className="header_cart-item-description">
                      Màu: Hồng nam tính
                    </span>
                    <span className="header_cart-item-remove">Xóa</span>
                  </div>
                </div>
              </li>
              <li className="header_cart-item">
                <img
                  src={require("../../../assets/image/tui_xach.png")}
                  alt="Tui xach"
                  className="header_cart-img"
                />
                <div className="header_cart-item-info">
                  <div className="header_cart-item-head">
                    <h5 className="header_cart-item-name">
                      Bộ túi sách hàng hiệu
                    </h5>
                    <div className="header_cart-item-price-wrap">
                      <span className="header_cart-item-price">
                        2,000,000 đ
                      </span>
                      <span className="header_cart-item-multiply">x</span>
                      <span className="header_cart-item-qnt">1</span>
                    </div>
                  </div>
                  <div className="header_cart-item-body">
                    <span className="header_cart-item-description">
                      Màu: Hồng nam tính
                    </span>
                    <span className="header_cart-item-remove">Xóa</span>
                  </div>
                </div>
              </li>
              <li className="header_cart-item">
                <img
                  src={require("../../../assets/image/tui_xach.png")}
                  alt="Tui xach"
                  className="header_cart-img"
                />
                <div className="header_cart-item-info">
                  <div className="header_cart-item-head">
                    <h5 className="header_cart-item-name">
                      Bộ túi sách hàng hiệu
                    </h5>
                    <div className="header_cart-item-price-wrap">
                      <span className="header_cart-item-price">
                        2,000,000 đ
                      </span>
                      <span className="header_cart-item-multiply">x</span>
                      <span className="header_cart-item-qnt">1</span>
                    </div>
                  </div>
                  <div className="header_cart-item-body">
                    <span className="header_cart-item-description">
                      Màu: Hồng nam tính
                    </span>
                    <span className="header_cart-item-remove">Xóa</span>
                  </div>
                </div>
              </li>
            </ul>
            <a href="/" className="header_cart-view-cart btn btn--primary">
              Xem giỏ hàng
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Headercart;
