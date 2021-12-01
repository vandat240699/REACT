import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { listCategory, readcate } from "../api/categoryAPI";
import UploadImage from "./UploadImage";
import { ToastContainer, toast } from "react-toastify";

const EditCategory = (props) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    let navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState({});

    useEffect(() => {
        readcate(id).then((response) => {
            setCategory(response.data);
            reset(response.data);
        });
    }, [id, reset]);

    const onSubmit = (data) => {
        props.onEditCate({ id, ...data });
    };


    const EditCategoryForm = () => {
        return (

            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <br />
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Tên danh mục</span>
                    </div>
                    <input defaultValue={category.name} {...register("name", { required: true })} type="text" id="name" required="required" className="form-control" placeholder="Tên danh mục" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Ảnh sản phẩm</span>
                    </div>
                    <input defaultValue={category.img} {...register("img")} type="text" id="image" className="form-control" required="required" placeholder="Image" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <button type="submit" id="btnSubmit" className="btn btn-primary">Update</button>
            </form>
        )
    }
    return (
        <div>
            {EditCategoryForm()}
        </div>
    );
};

export default EditCategory;
