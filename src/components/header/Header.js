import React, { Component } from "react";
import Headernavbar from "./Headernavbar/Headernavbar";
import Headerwithsearch from "./Headerwithsearch/Headerwithsearch"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="grid wide">
          {/* Header Navbar */}
          <Headernavbar />
          {/* header_with-search */}
          <Headerwithsearch />

        </div>
        <ul className="header__sort-bar">
          <li className="header__sort-item header__sort-item--active">
            <a href="/" className="header__sort-link">Trang diem mat</a>
          </li>
          <li className="header__sort-item">
            <a href="/" className="header__sort-link">Trang diem mat</a>
          </li>
          <li className="header__sort-item">
            <a href="/" className="header__sort-link">Trang diem mat</a>
          </li>
          <li className="header__sort-item">
            <a href="/" className="header__sort-link">Trang diem mat</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
