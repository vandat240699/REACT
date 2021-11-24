import { ToastContainer, toast } from "react-toastify";
// import Data from './data/Data';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ShowList from './show/ShowList';
import './App.css';
import { useEffect, useState } from 'react';
import LayoutWebsite from './layout/LayoutWebsite';
import LayoutAdmin from './layout/LayoutAdmin';
import { create, list, remove, update } from './api/productAPI';
import axios from 'axios';
import AddProduct from './admin/AddProduct';
import EditProduct from './admin/EditProduct';
import ProductDetail from "./website/ProductDetail";
import ProductWebsite from './website/Product';
import 'react-toastify/dist/ReactToastify.css';
import Signin from "./website/Sigin";
import Signup from "./website/Sigup";
import PrivateAdmin from "./components/PrivateAdmin";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import 'antd/dist/antd.css';
// import RemoveProduct from "../admin/RemoveProduct";





function App() {
  //state hooks

  const [colorBackground, SetColorBackground] = useState('#282c34');
  const [product, setProduct] = useState([]);
  const [add, setAdd] = useState(true);
  // const [edit, setEdit] = useState(false);

  useEffect(() => {
    list().then(response => setProduct(response.data))
  }, []);

  // function remove(id) {
  //   fetch("https://5e79b4b817314d00161333da.mockapi.io/product/" + id, {
  //     method: "DELETE",
  //   })
  //   const newProduct = product.filter((item) => item.id !== id);
  //   setProduct(newProduct);
  // }

  function removeHandler(id) {
    remove(id)
      .then(() => {
        list().then(response => setProduct(response.data))
      })
      toast.success("Xóa thành công");
  }



  useEffect(() => {
    document.querySelector('#formAdd').addEventListener("submit", (e) => {
      e.preventDefault();
      const Data = {
        name: document.querySelector('#name').value,
        img: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        desc: document.querySelector('#desc').value,
        quantity: document.querySelector('#quantity').value,
        slug: document.querySelector('#slug').value,
      }
      create(Data)
        .then(() => {
          list().then(response => setProduct(response.data))
        })
      toast.info("thêm thành công");
    })
  }, [])


  const onHandleAdd = (data) => {
    const fakeProduct = {
      id: data.length + 1, ...data
    };
    create(fakeProduct)
      .then(response =>
      setProduct([...product, response.data]));
      // toast.info("thêm thành công");
};


const onHandleEdit = (data) => {
  update(data).then(() => {
    const newProduct = product.map(item => item.id === data.id ? data : item)
    toast.success("Đã cập nhật thành công");
    setProduct(newProduct);
  })
};

const formAdd = () => {
  document.querySelector('#formAdd').classList.toggle('active');
}

const formEdit = () => {
  document.querySelector('#formEdit').classList.toggle('active');
}

return (
  <div className="App" style={{ backgroundColor: colorBackground, color: colorBackground === '#282c34' ? '#fff' : '#282c34' }}>
    <ToastContainer />
    <header >
      <button style={{ float: 'right', height: 55, }} onClick={() => colorBackground == '#282c34' ? SetColorBackground('#fff') : SetColorBackground('#282c34')} className="btn btn-outline-success my-2 my-sm-0" type="submit">Thay Giao Diện</button>
      {/* <nav style={{ height: 60, unBac }} className="navbar navbar-expand-lg navbar-light bg-light">
          <img width={50} className="navbar-brand App-logo" src={logo} />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            
          </div>
        </nav> */}
      <BrowserRouter>
        <Routes>
          {/* GIao diện dành cho website */}
          <Route path="/" element={<LayoutWebsite />}>
            {/* Mặc định khi truy cập / thì màn hình render ra home */}
            <Route path="/">
              <Route index element={
                <div>
                  <div><ProductWebsite data={product} /></div>
                  <div><Footer /></div>
                </div>} />
            </Route>
            {/* khi truy cập /product thì màn hình render ra component Product */}
            <Route
              path="product"
              element={
                <div>
                  <ProductWebsite data={product} /> <Footer />
                </div>
              } />
            {/* khi truy cập /product/123 thì màn hình render ra component Product Detail */}
            <Route path="product/:id" element={< ProductDetail />} />
            
            <Route path="signin" element={<div><Signin /> < Footer /></div>} />
            <Route path="signup" element={<div><Signup /> < Footer /></div>} />
          </Route>
          {/* Giao diện dành cho Admin */}
          <Route path="admin/*" element={
            <PrivateAdmin abc="123">
              <LayoutAdmin />
            </PrivateAdmin>
          }>
            {/* Khi truy cập /admin thì component Navigate sẽ tự động chuyển đến /admin/dashboard */}
            <Route index element={<div>Home <Footer/></div>} />
            {/* <Route index element={
              <div></div>
            } /> */}
            <Route path="dashboard" element={<div>Dashboard Product</div>} />
            <Route path="category" element={<div>Phần danh mục sản phẩm <Footer /></div>} />
            <Route path="product" element={
              <div className="dashboard-product" >
                <button style={{ marginRight: 20 }} onClick={() => formAdd()} className={add === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{add === false ? 'hủy' : 'Thêm sản phẩm mới'}</button>
                <table style={{ marginTop: 35 }} className="table table-bordered">
                  <thead >
                    <tr>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Giá sản phẩm</th>
                      <th scope="col">Danh mục</th>
                      <th scope="col">Mô tả sản phẩm</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Chức năng</th>
                      <th scope="col">Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ShowList data={product} edit1={formEdit} url={AddProduct} removed={removeHandler} />
                  </tbody>
                </table>
                < Footer/>
              </div>} />
            <Route path="product/add" element={<AddProduct onAdd={onHandleAdd} />} />
            <Route path="product/:id/edit" element={<EditProduct onUpdate={onHandleEdit} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </header>
    {
      <div id="formAdd"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          background: '#998c8c',
          display: 'none'
        }} className="formAdd1">
        <div>
          <h2>Thêm sản phẩm</h2>
          <button style={{ marginTop: -70, marginLeft: 1430 }} className="btn btn-danger" onClick={() => formAdd()}><strong>X</strong></button>
        </div>
        <form  >
          <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Tên sản phẩm</span>
            </div>
            <input type="text" id="name" className="form-control" placeholder="Tên sản phẩm" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Ảnh sản phẩm</span>
            </div>
            <input type="text" id="image" className="form-control" placeholder="Image" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Giá sản phẩm</span>
            </div>
            <input id="price" type="number" className="form-control" placeholder="Giá sản phẩm" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Desc</span>
            </div>
            <input type="text" id="desc" className="form-control" placeholder="Desc" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Số lượng</span>
            </div>
            <input type="number" id="quantity" className="form-control" placeholder="Số lượng" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div>
          <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Slug</span>
            </div>
            <input type="text" id="slug" className="form-control" placeholder="Slug" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div>
          <button type="submit" id="btnSubmit" className="btn btn-primary">Thêm</button>
        </form>
      </div>
    }
  </div>
);
}
export default App;
