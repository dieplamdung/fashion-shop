import React, { Component } from "react";

class Headersearch extends Component {
  render() {
    return (
      <div className="header__search">
        <div className="header__search-wrap">
          <input
            type="text"
            className="header__search-input"
            placeholder="Nhập để tìm kiếm sản phẩm"
          />
          <div className="header__search-history">
            <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
            <ul className="header__search-histoty-list">
              <li className="header__search-history-item">
                <a href="/" className="header__search-history-link">
                  Mu bao hiem
                </a>
              </li>
              <li className="header__search-history-item">
                <a href="/" className="header__search-history-link">
                  Ao khoac
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__search-select">
          <span className="header__search-select-label">Trong Shop</span>
          <i className="header__search-select-down fas fa-chevron-down"></i>
          <ul className="header__search-option">
            <li className="header__search-option-item header__search-option-item--active">
              <span>Trong Shop</span>
              <i className="fas fa-check"></i>
            </li>
            <li className="header__search-option-item">
              <span>Ngoài Shop</span>
              <i className="fas fa-check"></i>
            </li>
          </ul>
        </div>
        <button className="header__search-btn">
          <i className="header__search-btn-icon fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default Headersearch;