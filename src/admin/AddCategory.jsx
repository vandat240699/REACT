import react, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UploadImage from "./UploadImage";
import { ToastContainer, toast } from "react-toastify";

const AddCategory = (props) => {
    const onSubmit = async (data) => {

        await UploadImage(data.img[0]).then((response) => {
            data.img = response.url;
        });
        props.onAddCate(data);
        toast.success("Thêm thành công !", {
            onClose: () => navigate("/admin/category/", { replace: true }),
            autoClose: 500
        });
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    let navigate = useNavigate()

    const AddCategoryForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Tên danh mục</span>
                    </div>
                    <input {...register("name", { replace: true })} maxLength="100" type="text" id="name" className="form-control" placeholder="Tên danh mục" aria-label="Username" required="required" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Ảnh minh họa</span>
                    </div>
                    <input {...register("img")} type="file" id="image" className="form-control" placeholder="Image" aria-label="Username" required="required" aria-describedby="basic-addon1"></input>
                </div>
                <button type="submit" id="btnSubmit" className="btn btn-primary">Thêm</button>
            </form>
        )

    }
    return (
        <div>
            {AddCategoryForm()}
        </div>
    )
}
export default AddCategory;