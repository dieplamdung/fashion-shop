import React, { Component } from "react";
import "./assets/css/base.css";
import "./assets/css/main.css";
import "./assets/css/grid.css";
import "./assets/css/responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/header/Header";
import  Container from "./components/Container/Container";


class App extends Component {
  constructor(props){
    super(props);
      this.state={
        Products:[
          {
            id:1,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: true,
            rating: 2,
            sold: 1,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:2,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: false,
            rating: 5,
            sold: 66,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:3,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: false,
            rating: 5,
            sold: 66,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:4,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: false,
            rating: 5,
            sold: 66,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:5,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: false,
            rating: 5,
            sold: 66,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:1,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: true,
            rating: 2,
            sold: 1,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:2,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: false,
            rating: 5,
            sold: 66,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:3,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: false,
            rating: 5,
            sold: 66,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:4,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: false,
            rating: 5,
            sold: 66,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          },
          {
            id:5,
            name:"Nước hoa nhập khẩu từ pháp chính hãng 100%- đổi trả miền phí",
            image: "https://orchard.vn/wp-content/uploads/2014/06/Bvlgari-Aqva-Pour-Homme_1-300x300.jpg",
            priceold:"5,500,500",
            pricenew:"1,500,500",
            like: false,
            rating: 5,
            sold: 66,
            brand: "Whoo",
            origin:"Pháp",
            saleoff:"11%"
          }
        ],

      }
  }
  render() {
    return (
      <div className="app">
        {/* Header */}
        <Header />
        {/* Container */}
        <Container Products={this.state.Products}/>

        {/* Link san pham */}
        {/* <Productitem /> */}
      </div>
    );
  }
}
export default App;

