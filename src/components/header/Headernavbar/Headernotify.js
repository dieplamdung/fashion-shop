import React, { Component } from "react";

class Headernotify extends Component {
  render() {
    return (
      <div className="header__notify">
        <header className="header__notify-header">
          <h3>Thông báo mới nhận</h3>
        </header>
        <ul className="header__notify-list">
          <li className="header__notify-item header__notify-item--viewed">
            <a href="/" className="header__notify-link">
              <img
                src="https://owa.bestprice.vn/images/articles/uploads/tu-a-z-kinh-nghiem-mua-my-pham-han-quoc-chat-luong-tiet-kiem-5e8698f6a74c9.jpg"
                alt=""
                className="header__notify-img"
              />
              <div className="header__notify-infor">
                <span className="header__notify-name">
                  Mỹ phẩm chỉnh hãng của hãng my phẫm amway
                </span>
                <span className="header__notify-descriotion">
                  Mô tả sản phẩm chính hãng
                </span>
              </div>
            </a>
          </li>
          <li className="header__notify-item">
            <a href="/" className="header__notify-link">
              <img
                src="https://owa.bestprice.vn/images/articles/uploads/tu-a-z-kinh-nghiem-mua-my-pham-han-quoc-chat-luong-tiet-kiem-5e8698f6a74c9.jpg"
                alt=""
                className="header__notify-img"
              />
              <div className="header__notify-infor">
                <span className="header__notify-name">
                  Mỹ phẩm chỉnh hãng của hãng my phẫm amway
                </span>
                <span className="header__notify-descriotion">
                  Mô tả sản phẩm chính hãng
                </span>
              </div>
            </a>
          </li>
          <li className="header__notify-item">
            <a href="/" className="header__notify-link">
              <img
                src="https://owa.bestprice.vn/images/articles/uploads/tu-a-z-kinh-nghiem-mua-my-pham-han-quoc-chat-luong-tiet-kiem-5e8698f6a74c9.jpg"
                alt=""
                className="header__notify-img"
              />
              <div className="header__notify-infor">
                <span className="header__notify-name">
                  Mỹ phẩm chỉnh hãng của hãng my phẫm amway
                </span>
                <span className="header__notify-descriotion">
                  Mô tả sản phẩm chính hãng
                </span>
              </div>
            </a>
          </li>
        </ul>
        <div className="header__notify-footer">
          <a href="/" className="header__notify-footer-btn">
            Xem tất cả
          </a>
        </div>
      </div>
    );
  }
}
export default Headernotify;
