import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <div className="home_filter-page">
        <span className="home_filter-page-num">
          <span className="home_filter-page-num-current">1</span>/14
        </span>
        <div className="home_filter-page-control">
          <a
            href="/"
            className="home_filter-page-btn home_filter-page-btn--disabled"
          >
            <i className="home_filter-page-icon fas fa-angle-left"></i>
          </a>
          <a href="/" className="home_filter-page-btn">
            <i className="home_filter-page-icon fas fa-angle-right"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Pagination;
