import React, { Component } from "react";
import Danhmuc from "./Danhmuc";
import Pagination from "./Pagination";
import Product from "./Product";
import Page from "./Page";
import Footer from "./Footer/Footer";

class Container extends Component {
  render() {
    var {Products} = this.props;
    return (
      <div className="app_container">
        <div className="grid wide">
          <div className="grid_row app_content">
            <div className="grid_column-5">
              {/* Danh muc san pham */}
              <Danhmuc/>
            </div>
            <div className="grid_column-10">
              <div className="home_filter hide-on-mobile-tablet">
                <span className="home_filter-label">Sắp xếp theo</span>
                <button className="home_filter-btn btn">Phổ biến</button>
                <button className="home_filter-btn btn btn-primary">
                  Mới nhất
                </button>
                <button className="home_filter-btn btn">Bán chạy</button>
                <div className="select-input">
                  <span className="select-input-label">Giá</span>
                  <i className="select-input-icon fas fa-angle-down"></i>
                  <ul className="select-input-list">
                    <li className="select-input-item">
                      <a href="/" className="select-input-link">
                        Giá: Thấp đến cao
                      </a>
                    </li>
                    <li className="select-input-item">
                      <a href="/" className="select-input-link">
                        Giá: Cao đến thấp
                      </a>
                    </li>
                  </ul>
                </div>
                {/* phan trang 1 */}
               <Pagination/>
              </div>

              {/* Danh sach san pham */}
              <div className="home_product">
                {/* Grid bao ben ngoai */}
                  {/* sản phẩm */}
                  <Product Products={Products}/>
              </div>
             {/* Phan trang 2 */}
             <Page />
            </div>
          </div>
        </div>
        {/* footer */}
       <Footer />
      </div>
    );
  }
}
export default Container;
