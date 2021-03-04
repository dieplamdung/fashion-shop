import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="grid wide">
          <div className="grid_row">
            <div className="grid_column-2-4">
              <h3 className="footer_heading">Chăm sóc khách hàng</h3>
              <ul className="footer_list">
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Trung tâm trợ giúp{" "}
                  </a>
                </li>
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Shop{" "}
                  </a>
                </li>
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Hướng dẫn mua hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid_column-2-4">
              <h3 className="footer_heading">Giới thiệu</h3>
              <ul className="footer_list">
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Giới thiệu
                  </a>
                </li>
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Tuyển dụng
                  </a>
                </li>
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Điều khoản
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid_column-2-4">
              <h3 className="footer_heading">Danh mục</h3>
              <ul className="footer_list">
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Quần áo
                  </a>
                </li>
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Trang sức
                  </a>
                </li>
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    Nước hoa
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid_column-2-4">
              <h3 className="footer_heading">Theo dõi</h3>
              <ul className="footer_list">
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    <i className="footer_list-item-icon fab fa-facebook"></i>
                    facebook
                  </a>
                </li>
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    <i className="footer_list-item-icon fab fa-instagram"></i>
                    Instagram
                  </a>
                </li>
                <li className="footer_list-item">
                  <a href="/" className="footer_list-item-link">
                    <i className="footer_list-item-icon fab fa-linkedin"></i>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid_column-2-4">
              <h3 className="footer_heading">Vào cửa hàng trên ứng dụng</h3>
              <div className="footer_dowload">
                <img
                  src={require("../../../assets/image/maQR.PNG")}
                  alt="dowload"
                  className="footer_dowload-qr"
                />
                <div className="footer_dowload-apps">
                  <a href="/" className="footer_dowload-app-link">
                    <img
                      src={require("../../../assets/image/ch_play.PNG")}
                      alt="Chplay"
                      className="footer_dowload-app-img"
                    />
                  </a>
                  <a href="/" className="footer_dowload-app-link">
                    <img
                      src={require("../../../assets/image/store_ios.png")}
                      alt="Appstort"
                      className="footer_dowload-app-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="grid wide">
            <p className="footer_text">@ 2020 Học lập trình</p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
