import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      product : [
        {
          id  : 1,
          name: 'Iphone 6',
          price: 15000000,
          image: 'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
          status: true
        },
        {
          id  : 2,
          name: 'Redmi S2',
          price: 3000000,
          image: 'https://cdn.tgdd.vn/Products/Images/42/161979/xiaomi-redmi-s2-5-600x600.jpg',
          status: true
        },
        {
          id  : 3,
          name: 'Galaxy S9',
          price: 20000000,
          image: 'https://www.viettablet.com/images/thumbnails/480/516/detailed/26/samsung-galaxy-s9-cu-viettablet.jpg',
          status: true
        },
        {
          id  : 4,
          name: 'Redmi 7',
          price: 4000000,
          image: 'https://didongthongminh.vn/upload_images/2019/01/Xiaomi-Redmi-Note-7-Gradient-1.png',
          status: true
        },
        {
          id  : 5,
          name: 'Redmi 8',
          price: 4500000,
          image: 'https://didongthongminh.vn/upload_images/2019/11/Redmi-note-8-trang-2.png',
          status: true
        },
        {
          id  : 6,
          name: 'Redmi 8',
          price: 4500000,
          image: 'https://didongthongminh.vn/upload_images/2019/11/Redmi-note-8-trang-2.png',
          status: true
        }
      ],
      isActive : true
    };
    // this.onSetState = this.onSetState.bind(this);
  }

  onSetState = () => {
    
    // if(this.state.isActive === true)
    //   this.setState({
    //       isActive : false
    //   })
    // else
    //   this.setState({
    //     isActive : true
    //   })

    this.setState({
      isActive : !this.state.isActive
    })
  
  }

  render() {

    let data = this.state.product.map((product,index) => {
      let result = '';
      if(product.status==true){
        result = <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td><img src={product.image}/></td>
                    <td>
                      <span className="label label-success">
                        {product.price} VND
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-success">Mua</button>
                      <button className="btn btn-danger">Hủy</button>
                    </td>
                 </tr>
      }
      return result;
    });

    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Nhat Huy Mobile</a>
          <a class="navbar-brand" href="#">Giỏ hàng <i class="fas fa-shopping-cart"></i>(0)</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data}
                </tbody>
              </table>
              <button className="btn btn-warning" onClick={this.onSetState}>
                Active : {this.state.isActive === true ? "true" : "false" }
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <b>&copy; Nhat Huy Mobile 2021</b>
          <p>Bản quyền website thuộc về <a href="https://wwww.facebook.com/DarthVader.HuyNguyen" target="_blank">Nhật Huy</a></p>
        </div>
      </div>
    );

  }

}

export default App;