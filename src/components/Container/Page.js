import React, { Component } from "react";

class Page extends Component {
  render() {
    return (
      <div>
        <ul className="pagination home_product_pagination">
          <li className="pagination-item">
            <a href="/" className="pagination-link">
              <i className="pagination-item-icon fas fa-angle-left"></i>
            </a>
          </li>
          <li className="pagination-item pagination-link-active">
            <a href="/" className="pagination-link">
              1
            </a>
          </li>
          <li className="pagination-item">
            <a href="/" className="pagination-link">
              2
            </a>
          </li>
          <li className="pagination-item">
            <a href="/" className="pagination-link">
              3
            </a>
          </li>
          <li className="pagination-item">
            <a href="/" className="pagination-link">
              ...
            </a>
          </li>
          <li className="pagination-item">
            <a href="/" className="pagination-link">
              14
            </a>
          </li>
          <li className="pagination-item">
            <a href="/" className="pagination-link">
              <i className="pagination-item fas fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Page;
