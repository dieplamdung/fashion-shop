import React, { Component } from "react";
import Headersearch from "./Headersearch";
import Headercart from "./Headercart";

class Headerwithsearch extends Component {
  render() {
    return (
      <div className="header_with-search">
          <label for="mobile-search-checkbox" className="header_mobile-search">
            <i className="header_mobile-search-icon fas fa-search"></i>
          </label>
        <div className="header__logo">
          <a href="/" className="header__logo-link">
            <img src={require("../../../assets/image/logo.png")} alt="" className="header__logo-svg shopee-svg-icon header-with-search__shopee-logo icon-shopee-log0"/>
          </a>
        </div>

        {/* Header Search */}
        <input className="header__search-checkbox" type="checkbox" hidden  id="mobile-search-checkbox"/>
        <Headersearch />

        {/* Giỏ hàng */}
        <Headercart/>
        
      </div>
    );
  }
}
export default Headerwithsearch;
