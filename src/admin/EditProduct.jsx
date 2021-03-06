import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../api/productAPI";
import UploadImage from "./UploadImage";
import { ToastContainer, toast } from "react-toastify";
import ShowCategory from "../show/ShowCategory";
import { listCategory } from "../api/categoryAPI";

const EditProduct = (props) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    let navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        read(id).then((response) => {
            setProduct(response.data);
            reset(response.data);
        });
    }, [id, reset]);

    const onSubmit = (data) => {
        props.onUpdate({ id, ...data });
    };

    const [cate, setCate] = useState([]);
    useEffect(() => {
        listCategory().then(res => setCate(res.data))
    }, [])

    const EditProductForm = () => {
        return (

            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <br />
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Tên sản phẩm</span>
                    </div>
                    <input defaultValue={product.name} {...register("name", { required: true })} type="text" id="name" required="required" className="form-control" placeholder="Tên sản phẩm" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Ảnh sản phẩm</span>
                    </div>
                    <input defaultValue={product.img} {...register("img")} type="text" id="image" className="form-control" required="required" placeholder="Image" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Giá sản phẩm</span>
                    </div>
                    <input defaultValue={product.price} {...register("price")} id="price" type="number" className="form-control" required="required" placeholder="Giá sản phẩm" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Danh mục</span>
                    </div>
                    <select className="form-control" {...register("desc")}>
                        < ShowCategory data={cate}/>
                    </select>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Số lượng</span>
                    </div>
                    <input defaultValue={product.quantity} {...register("quantity")} type="number" id="quantity" required="required" className="form-control" placeholder="Số lượng" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Mô tả sản phẩm</span>
                    </div>
                    <input defaultValue={product.slug} {...register("slug")} type="text" id="slug" className="form-control" required="required" placeholder="Mô tả sản phẩm" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <button type="submit" id="btnSubmit" className="btn btn-primary">Update</button>
            </form>
        )
    }
    return (
        <div>
            {EditProductForm()}
        </div>
    );
};

export default EditProduct;
