import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lists, read } from "../api/productAPI";
import { format } from "../show/ShowList";
import ProductWebsite from "./Product";
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
                            <p style={{ float: 'left' }}>Mô tả sản phẩm: {product.slug}</p>
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
                            <div className="product-variants">
                                <div className="product-property">
                                    <div className="luotxem">
                                    </div>
                                    <div className="product-property-label">
                                        SIZE
                                    </div>
                                    <div className="product-property-options">
                                        <div className="property-option " data-level="1" data-opt-id="1577786971820" data-img-opt="0" title="38">
                                            <input type="radio" data-prop-id="2" name="option_1" value="1577786971820" data-label="38" checked />
                                            <div className="property-option-label">
                                                <span>38</span>
                                            </div>
                                        </div>
                                        <div className="property-option " data-level="1" data-opt-id="1577786971280" data-img-opt="0" title="39">
                                            <input type="radio" data-prop-id="2" name="option_1" value="1577786971280" data-label="39" />
                                            <div className="property-option-label">
                                                <span>39</span>
                                            </div>
                                        </div>
                                        <div className="property-option " data-level="1" data-opt-id="1577786971755" data-img-opt="0" title="40">
                                            <input type="radio" data-prop-id="2" name="option_1" value="1577786971755" data-label="40" />
                                            <div className="property-option-label">
                                                <span>40</span>
                                            </div>
                                        </div>
                                        <div className="property-option " data-level="1" data-opt-id="1597398073697" data-img-opt="0" title="41">
                                            <input type="radio" data-prop-id="2" name="option_1" value="1597398073697" data-label="41" />
                                            <div className="property-option-label">
                                                <span>41</span>
                                            </div>
                                        </div>
                                        <div className="property-option " data-level="1" data-opt-id="1597398073213" data-img-opt="0" title="42">
                                            <input type="radio" data-prop-id="2" name="option_1" value="1597398073213" data-label="42" />
                                            <div className="property-option-label">
                                                <span>42</span>
                                            </div>
                                        </div>
                                        <div className="property-option " data-level="1" data-opt-id="1597398073883" data-img-opt="0" title="43">
                                            <input type="radio" data-prop-id="2" name="option_1" value="1597398073883" data-label="43" />
                                            <div className="property-option-label">
                                                <span>43</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-quantity">
                                <div className="product-quantity-label">
                                    Số lượng
                                </div>
                                <div className="product-quantity-options">
                                    <div className="quantity-option" title="1">
                                        <input type="radio" name="quantity" value="1" checked />
                                        <div className="quantity-option-label">
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="quantity-option" title="2">
                                        <input type="radio" name="quantity" value="2" />
                                        <div className="quantity-option-label">
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div className="quantity-option" title="3">
                                        <input type="radio" name="quantity" value="3" />
                                        <div className="quantity-option-label">
                                            <span>3</span>
                                        </div>
                                    </div>
                                    <div className="quantity-option" title="4">
                                        <input type="radio" name="quantity" value="4" />
                                        <div className="quantity-option-label">
                                            <span>4</span>
                                        </div>
                                    </div>
                                    <div className="quantity-option" title="5">
                                        <input type="radio" name="quantity" value="5" />
                                        <div className="quantity-option-label">
                                            <span>5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-form">
                                <h3 className="headline text-uppercase">Thông tin đặt hàng</h3>
                                <input className="text-input" type="tel" name="sdt" autocomplete="off" placeholder="Số điện thoại" />
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
                                <button className="btnSubmitOrder hvr-pulse-shrink text-uppercase">Bấm để hoàn tất đặt hàng</button>
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
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{format(item.price)} đ</p>
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