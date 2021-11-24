import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { read } from "../api/productAPI";
import { format } from "../show/ShowList";

const ProductDetail = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        read(id).then((response) => setProduct(response.data));
    }, [id])
    return (
        product && (
            <div className="product-detail">
                <h2>{product.name}</h2>
                <img src = {product.img} alt={product.name}/>
                <p>giá sản phẩm: {format(product.price)} đ</p>
            </div>
        )
    )
}

export default ProductDetail;