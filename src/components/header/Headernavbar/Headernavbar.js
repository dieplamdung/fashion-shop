import React, { Component } from "react";
import Headernotify from "./Headernotify";
import Headeruser from "./Headeruser";

class Headernavbar extends Component {
  render() {
    return (
      <nav className="header_navbar hide-on-mobile-tablet">
        <ul className="header_navbar-list">
          <li className="header_navbar-item header_navbar-item-separate header_navbar-item-showqr">
            Vào cửa hàng trên ứng dụng
            <div className="header_qrcode">
              <img
                src={require("../../../assets/image/maQR.PNG")}
                alt="QR_code"
                className="header_qrcode-img"
              />
              <div className="header_qrcode-apps">
                <a href="/" className="header_qr-dowload-link">
                  <img
                    src={require("../../../assets/image/ch_play.PNG")}
                    alt="CHPlay"
                    className="header_qrcode-apps-dowload"
                  />
                </a>
                <a href="/" className="header_qr-dowload-link">
                  <img
                    src={require("../../../assets/image/store_ios.png")}
                    alt="CHPlay"
                    className="header_qrcode-apps-dowload"
                  />
                </a>
              </div>
            </div>
          </li>
          <li className="header_navbar-item">Kết nối
            <a href="/"><i className="header_navbar-item-icon fab fa-facebook"></i></a>
            <a href="/"><i className="header_navbar-item-icon fab fa-instagram-square"></i></a>
          </li>
        </ul>
        <ul className="header_navbar-list">
          <li className="header_navbar-item">
            <a href="/" className="header_navbar-item-link">
            <i className="header_navbar-item-link-icon fas fa-bell"></i>
              Thông báo
            </a>

            {/* header_notify */}
            <Headernotify />

          </li>
          <li className="header_navbar-item">
            <a href="/" className="header_navbar-item-link">
            <i className="header_navbar-item-link-icon far fa-question-circle"></i>
              Trợ giúp
            </a>
          </li>
          {/* <li className="header_navbar-item header_navbar-item-bold header_navbar-item-separate">
                  Đăng ký
                </li>
                <li className="header_navbar-item header_navbar-item-bold">
                  Đăng nhập
                </li> */}
          <li className="header_navbar-item header_navbar-user">
            <img
              src={require("../../../assets/image/no_cart.png")}
              alt=""
              className="header_navbar-user-img"
            />
            <span className="header_navbar-user-name">Vo Van Them</span>
            
            {/* Header User */}
            <Headeruser />
          </li>
        </ul>
      </nav>
    );
  }
}
export default Headernavbar;
