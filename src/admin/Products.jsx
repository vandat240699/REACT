import ShowList from "../show/ShowList";
import format from "../show/ShowList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div>
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
        </div>
    )
}
export default Products;