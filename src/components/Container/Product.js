import React, { Component } from "react";

class Product extends Component {
  ranting = (ra) => {
    var ratin = [];
    for (var i = 0; i < 5; i++) {
      if (i < ra) {
        ratin.push(
          <i
            key={i}
            className="home_product-item-rating-icon home_product-item-rating-active fas fa-star"
          ></i>
        );
      } else {
        ratin.push(
          <i className="home_product-item-rating-icon fas fa-star"></i>
        );
      }
    }
    return ratin;
  };
  render() {
    var { Products } = this.props;
    var HTML = Products.map((elm, index) => {
      return (
        <div className="grid_column-2-4" key={index}>
          <a className="home_product-item" href="/">
            <div
              className="home_product-item-img"
              style={{
                backgroundImage: "url(" + elm.image + ")",
              }}
            ></div>
            <h4 className="home_product-item-name">{elm.name}</h4>
            <div className="home_product-item-price">
              <span className="home_product-item-price-old">
                {elm.priceold}đ
              </span>
              <span className="home_product-item-price-new">
                {elm.pricenew}đ
              </span>
            </div>
            <div className="home_product-item-action">
              {/* home_product-item-like-liked */}
              <span
                className={
                  "home_product-item-like " +
                  (elm.like ? "home_product-item-like-liked" : "")
                }
              >
                <i className="home_product-item-like-icon-emty far fa-heart"></i>
                <i className="home_product-item-like-icon-fill fas fa-heart"></i>
              </span>
              <div className="home_product-item-rating">
                {/* {rating} */}
                {this.ranting(elm.rating)}
                {/* <i className="home_product-item-rating-icon home_product-item-rating-active fas fa-star"></i> */}
              </div>
              <span className="home_product-item-sold">{elm.sold} đã bán</span>
            </div>
            <div className="home_product-item-origin">
              <span className="home_product-item-brand">{elm.brand}</span>
              <span className="home_product-item-origin-name">
                {elm.origin}
              </span>
            </div>
            <div className="home_product-item-favourite">
              <i className="fas fa-check"></i>
              <span>Yêu thích</span>
            </div>
            <div className="home_product-item-sale-off">
              <span className="home_product-item-sale-off-percent">
                {elm.saleoff}
              </span>
              <span className="home_product-item-sale-off-label">GIẢM</span>
            </div>
          </a>
        </div>
      );
    });
    return (
      <div className="grid_row">
        {/* product item */}
        {HTML}
      </div>
    );
  }
}
export default Product;
