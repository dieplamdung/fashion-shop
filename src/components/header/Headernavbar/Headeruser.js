import React, { Component } from "react";

class Headeruser extends Component {
  render() {
    return (
      <div>
        <ul className="header_navbar-user-menu">
          <li className="header_navbar-user-item">
            <a href="/">Tài khoản của tôi</a>
          </li>
          <li className="header_navbar-user-item">
            <a href="/">Địa chỉ của tôi</a>
          </li>
          <li className="header_navbar-user-item">
            <a href="/">Đơn mua</a>
          </li>
          <li className="header_navbar-user-item header_navbar-user-item--separate">
            <a href="/">Đăng xuất</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Headeruser;
