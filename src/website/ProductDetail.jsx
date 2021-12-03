import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lists, read } from "../api/productAPI";
import { format } from "../show/ShowList";

const ProductDetail = () => {
    var { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        read(id).then((response) => {
            setProduct(response.data);
            var params = "desc=" + response.data.desc;
            lists(params).then((res) => {
                var newArr = res.data.filter((item) => item.id !== response.data.id)
                setRelatedProducts(newArr);
            });
        });
    }, [id]);
    return (
        product && (
            <div>
                <div className="col-xs-12 col-sm-7" >
                    <div id="product-slideshow-nav">
                        <div style={{ marginTop: 75 }}><img alt="" src={product.img} oid="0" /></div>
                    </div>
                    <form id="orderForm" action="" method="get">
                        <div className="product-info">
                            <h1>{product.name}</h1>
                            <p style={{ fontSize: 20, float: 'left' }}>Giá sản phẩm: {format(product.price)} đ</p>
                            <p style={{ float: 'left' }}><strong>Mô tả sản phẩm:</strong> {product.slug}</p>
                            <div className="product-prices">
                                <span className="product-sale-price" data-price=""></span>
                                <span className="product-regular-price"></span>
                            </div>
                            <div className="order-guarantee">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td colspan="2" id="rowCountdown">
                                                <span className="text-uppercase">Thời gian khuyến mãi còn lại</span>
                                                <div id="countdown" className="prcountdown" data-count-to="1621738800">
                                                    <span className="days"><span>00</span><span>Day</span></span>
                                                    <span className="hours"><span>05</span> : </span>
                                                    <span className="minutes"><span>49</span> : </span>
                                                    <span className="seconds"><span>55</span></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i data-feather="truck"></i> MIỄN PHÍ giao hàng toàn quốc</td>
                                            <td><i data-feather="dollar-sign"></i> Kiểm tra hàng trước khi thanh toán</td>
                                        </tr>
                                        <tr>
                                            <td><i data-feather="repeat"></i> 1 ĐỔI 1 trong 14 ngày ( lỗi từ NSX )</td>
                                            <td><i data-feather="shield"></i> BẢO HÀNH lên đến 12 tháng</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <div className="order-form">
                                <h3 className="headline text-uppercase">Thông tin đặt hàng</h3>
                                <input className="text-input" type="tel" name="sdt" autocomplete="off" placeholder="Số điện thoại" />
                                {/* <select name="" id="">
                                    <option>Trắng</option>
                                    <option>Đen</option>
                                </select> */}
                                <input className="text-input" type="text" name="name" autocomplete="off" placeholder="Họ tên" />
                                <input className="text-input" type="text" name="address" autocomplete="off" placeholder="Địa chỉ nhận hàng" />
                                <input className="text-input" type="email" name="email" autocomplete="off" placeholder="Email" />
                                <input type="hidden" name="content_id" value="36" />
                                <input type="hidden" name="shop_id" value="44" />
                                <input type="hidden" name="product_id" value="0" />
                                <input type="hidden" name="details" value="" />
                                <input type="hidden" name="total" value="0" />
                                <input type="hidden" name="env" value="banita" />
                                <input type="hidden" name="ts" value="1621731465" />
                                <input type="hidden" name="utm_product" value="bn0003" />
                                <input type="hidden" name="fbp" value="400751154211860" />
                                <input type="hidden" name="gtm" value="GTM-WM364CJ" />
                                <input type="hidden" name="submit_url" value="" />
                                <button className="btnSubmitOrder hvr-pulse-shrink text-uppercase">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </form>

                </div >
                <div className="">
                <h1 className="sanphamlienquan">Sản phẩm liên quan</h1>
                    {
                        relatedProducts.map((item, index) => {
                            return (
                                <div className="card">
                                    <img className="card-img-top" src={item.img} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>{item.name}</strong></h5>
                                        <p style={{color: 'red', fontWeight: 'bold'}} className="card-text">{format(item.price)} đ</p>
                                        <p className="card-text">{item.slug}</p>
                                        <Link className="btn btn-primary" to={`${"/product/" + item.id}`}>Xem sản phẩm</Link>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    )
}

export default ProductDetail;