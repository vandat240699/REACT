import { format } from "../show/ShowList";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lists, read } from "../api/productAPI";


const ProductWebsite = ({ data }) => {
    var { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        read(id).then((response) => {
            setProduct(response.data);
            var params = "desc=" + response.data.desc;
            lists(params).then((res) => {
                var newArr = res.data.filter((item) => item.id === 1 )
                setRelatedProducts(newArr);
            });
        });
    }, [id]);
    return (
        <div>
            {/* <h2 className="giaycaocap">Quần áo</h2> */}
            {data &&
                data.map((item, index) => {
                    return (
                        <div className="card">
                            <img className="card-img-top" src={item.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title"><strong>{item.name}</strong></h5>
                                <p style={{color: 'red', fontWeight: 'bold'}} className="card-text">{format(item.price)} đ</p>
                                <p className="card-text">{item.slug}</p>
                                <Link className="btn btn-primary" to={`${"/product/"+item.id}`}>Xem sản phẩm</Link>
                            </div>
                        </div>
                    );
                })}
            {/* <h2 className="giaycaocap">Giày cao cấp</h2> */}
        </div>
    );
};

export default ProductWebsite;





