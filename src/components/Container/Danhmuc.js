import React, { Component } from "react";

class Danhmuc extends Component{
  render() {
    return (
      <nav className="category">
      <h3 className="category_heading">
        <i className="category_heading-icon fas fa-list"></i>
        Danh muc
      </h3>
      <ul className="category_list">
        <li className="category_item category_item--active">
          <a href="/" className="category_item-link">
            Trang điểm mặt
          </a>
        </li>
        <li className="category_item">
          <a href="/" className="category_item-link">
            Trang điểm môi
          </a>
        </li>
        <li className="category_item">
          <a href="/" className="category_item-link">
            Trang điểm tay
          </a>
        </li>
      </ul>
    </nav>
    );
  }
}
export default Danhmuc;
