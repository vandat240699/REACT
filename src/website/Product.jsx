import { Link } from "react-router-dom";
import { format } from "../show/ShowList";

const ProductWebsite = ({ data }) => {
    return (
        <div>
            {data &&
                data.map((item, index) => {
                    return (
                        <div className="card">
                            <img className="card-img-top" src={item.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{format(item.price)} đ</p>
                                <p className="card-text">{item.slug}</p>
                                <Link className="btn btn-primary" to={`${"/product/"+item.id}`}>Xem sản phẩm</Link>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ProductWebsite;





