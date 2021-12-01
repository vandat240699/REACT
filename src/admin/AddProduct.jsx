import react, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UploadImage from "./UploadImage";
import { ToastContainer, toast } from "react-toastify";
import ShowCategory from "../show/ShowCategory";
import { listCategory } from "../api/categoryAPI";


const AddProduct = (props) => {
    const onSubmit = async (data) => {

        await UploadImage(data.img[0]).then((response) => {
            data.img = response.url;
        });
        props.onAdd(data);
        toast.success("Thêm thành công !", {
            onClose: () => navigate("/admin/product/", { replace: true }),
            autoClose: 500
        });
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    let navigate = useNavigate()

    const [cate, setCate] = useState([]);
    useEffect(() => {
        listCategory().then(res => setCate(res.data))
    }, [])

    const addProductForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Tên sản phẩm</span>
                    </div>
                    <input {...register("name", { replace: true })} maxLength="100" type="text" id="name" className="form-control" placeholder="Tên sản phẩm" aria-label="Username" required="required" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Ảnh sản phẩm</span>
                    </div>
                    <input {...register("img")} type="file" id="image" className="form-control" placeholder="Image" aria-label="Username" required="required" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Giá sản phẩm</span>
                    </div>
                    <input {...register("price")} id="price" type="number" className="form-control" placeholder="Giá sản phẩm" aria-label="Username" required="required" aria-describedby="basic-addon1"></input>
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
                    <input {...register("quantity")} type="number" id="quantity" className="form-control" placeholder="Số lượng" aria-label="Username" required="required" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3" style={{ width: "60%", margin: "auto" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Mô tả sản phẩm</span>
                    </div>
                    <input {...register("slug")} type="text" id="slug" className="form-control" placeholder="Mô tả sản phẩm" aria-label="Username" required="required" aria-describedby="basic-addon1"></input>
                </div>
                <button type="submit" id="btnSubmit" className="btn btn-primary">Thêm</button>
            </form>
        )
    }
    return (
        <div>
            {addProductForm()}
        </div>
    )
}

export default AddProduct;