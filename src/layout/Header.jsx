const Header = () => {
    return (
        <div id="header" className="header has-sticky sticky-jump">
            <div className="header-wrapper">
                <div id="top-bar" className="header-top hide-for-sticky nav-dark">
                    <div className="flex-row container">
                        <div className="flex-col hide-for-medium flex-left">
                            <ul className="nav nav-left medium-nav-center nav-small  nav-">
                                <li className="html header-social-icons ml-0">
                                    <div className="social-icons follow-icons "><a href="http://url" target="_blank"
                                        data-label="Facebook" rel="nofollow" className="icon plain facebook tooltip"
                                        title="Follow on Facebook"><i className="icon-facebook"></i></a><a
                                            href="http://url" target="_blank" rel="nofollow" data-label="Google+"
                                            className="icon plain  google-plus tooltip" title="Follow on Google+"><i
                                                className="icon-google-plus"></i></a></div>
                                </li>
                                <li className="html custom html_topbar_left">
                                    <p><span className="fa fa-phone" style={{marginRight: 10}}></span>HOTLINE: <a
                                        href="tel:+01269220162">0126 922 0162</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-col hide-for-medium flex-center">
                            <ul className="nav nav-center nav-small  nav-">
                            </ul>
                        </div>
                        <div className="flex-col hide-for-medium flex-right">
                            <ul className="nav top-bar-nav nav-right nav-small  nav-">
                                <li id="menu-item-395"
                                    className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-395"><a
                                        href="http://mauweb.monamedia.net/anphuoc/cham-soc-khach-hang/phieu-qua-tang/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Chăm
                                            sóc khách hàng</span></a></li>
                                <li id="menu-item-187"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category  menu-item-187">
                                    <a href="http://mauweb.monamedia.net/anphuoc/category/tin-tuc/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Tin
                                            tức</span></a></li>
                                <li id="menu-item-186"
                                    className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-186"><a
                                        href="http://mauweb.monamedia.net/anphuoc/tuyen-dung/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Tuyển
                                            dụng</span></a></li>
                            </ul>
                        </div>
                        <div className="flex-col show-for-medium flex-grow">
                            <ul className="nav nav-center nav-small mobile-nav  nav-">
                                <li className="html custom html_topbar_left">
                                    <p><span className="fa fa-phone" style={{marginRight: 10}}></span>HOTLINE: <a
                                        href="tel:+01269220162">0126 922 0162</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="masthead" className="header-main nav-dark">
                    <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
                        <div id="logo" className="flex-col logo">
                            <a href="http://mauweb.monamedia.net/anphuoc/"
                                title="anphuoc - Một trang web mới sử dụng WordPress" rel="home">
                                <img width="200" height="70"
                                    src="http://mauweb.monamedia.net/anphuoc/wp-content/uploads/2018/01/mona-logo-anphuoc.png"
                                    className="header_logo header-logo" alt="anphuoc" /><img width="200" height="70"
                                        src="http://mauweb.monamedia.net/anphuoc/wp-content/uploads/2018/01/mona-logo-anphuoc.png"
                                        className="header-logo-dark" alt="anphuoc" /></a>
                        </div>
                        <div className="flex-col show-for-medium flex-left">
                            <ul className="mobile-nav nav nav-left ">
                                <li className="nav-icon has-icon">
                                    <a href="#" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay"
                                        data-color="" className="is-small" aria-controls="main-menu" aria-expanded="false">

                                        <i className="icon-menu"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-col hide-for-medium flex-left-flex-grow">
                            <ul
                                className="header-nav header-nav-main nav nav-left  nav-line-bottom nav-size-medium nav-spacing-large nav-uppercase">
                            </ul>
                        </div>
                        <div className="flex-col hide-for-medium flex-right">
                            <ul
                                className="header-nav header-nav-main nav nav-right  nav-line-bottom nav-size-medium nav-spacing-large nav-uppercase">
                                <li id="menu-item-24"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-16 current_page_item active  menu-item-24">
                                    <a href="http://mauweb.monamedia.net/anphuoc/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Trang
                                            chủ</span></a></li>
                                <li id="menu-item-393"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-393 has-dropdown">
                                    <a href="http://mauweb.monamedia.net/anphuoc/gioi-thieu/tong-quan-ve-cong-ty/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Giới
                                            thiệu</span></a>
                                    <ul className='nav-dropdown nav-dropdown-simple'>
                                        <li id="menu-item-184"
                                            className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-184">
                                            <a href="http://mauweb.monamedia.net/anphuoc/gioi-thieu/tong-quan-ve-cong-ty/"
                                                className="menu-image-title-after"><span className="menu-image-title">Tổng quan
                                                    về công ty</span></a></li>
                                        <li id="menu-item-182"
                                            className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-182">
                                            <a href="http://mauweb.monamedia.net/anphuoc/gioi-thieu/lich-su-hinh-thanh/"
                                                className="menu-image-title-after"><span className="menu-image-title">Lịch sử
                                                    hình thành</span></a></li>
                                        <li id="menu-item-183"
                                            className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-183">
                                            <a href="http://mauweb.monamedia.net/anphuoc/gioi-thieu/tam-nhin-su-menh/"
                                                className="menu-image-title-after"><span className="menu-image-title">Tầm nhìn –
                                                    Sứ mệnh</span></a></li>
                                        <li id="menu-item-181"
                                            className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-181">
                                            <a href="http://mauweb.monamedia.net/anphuoc/gioi-thieu/cau-chuyen-thuong-hieu/"
                                                className="menu-image-title-after"><span className="menu-image-title">Câu chuyện
                                                    thương hiệu</span></a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-394"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-394 has-dropdown">
                                    <a href="http://mauweb.monamedia.net/anphuoc/khach-hang-doanh-nghiep/he-thong-quan-ly-chat-luong/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Khách
                                            hàng doanh nghiệp</span></a>
                                    <ul className='nav-dropdown nav-dropdown-simple'>
                                        <li id="menu-item-136"
                                            className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-136">
                                            <a href="http://mauweb.monamedia.net/anphuoc/khach-hang-doanh-nghiep/he-thong-quan-ly-chat-luong/"
                                                className="menu-image-title-after"><span className="menu-image-title">Hệ thống
                                                    quản lý chất lượng</span></a></li>
                                        <li id="menu-item-135"
                                            className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-135">
                                            <a href="http://mauweb.monamedia.net/anphuoc/khach-hang-doanh-nghiep/day-chuyen-san-xuat/"
                                                className="menu-image-title-after"><span className="menu-image-title">Dây chuyền
                                                    sản xuất</span></a></li>
                                        <li id="menu-item-134"
                                            className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-134">
                                            <a href="http://mauweb.monamedia.net/anphuoc/khach-hang-doanh-nghiep/doi-ngu-nhan-su/"
                                                className="menu-image-title-after"><span className="menu-image-title">Đội ngũ
                                                    nhân sự</span></a></li>
                                        <li id="menu-item-133"
                                            className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-133">
                                            <a href="http://mauweb.monamedia.net/anphuoc/khach-hang-doanh-nghiep/he-thong-nha-may/"
                                                className="menu-image-title-after"><span className="menu-image-title">Hệ thống
                                                    nhà máy</span></a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-131"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-131 has-dropdown">
                                    <a href="http://mauweb.monamedia.net/anphuoc/cua-hang/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Sản
                                            phẩm</span></a>
                                    <ul className='nav-dropdown nav-dropdown-simple'>
                                        <li id="menu-item-159"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children  menu-item-159 nav-dropdown-col">
                                            <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nam/"
                                                className="menu-image-title-after"><span className="menu-image-title">Trang phục
                                                    nam</span></a>
                                            <ul className='nav-column nav-dropdown-simple'>
                                                <li id="menu-item-165"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-165">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nam/veston-nam/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Veston nam</span></a></li>
                                                <li id="menu-item-164"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-164">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nam/so-mi-nam/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Sơ
                                                            mi nam</span></a></li>
                                                <li id="menu-item-163"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-163">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nam/quan-nam/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Quần nam</span></a></li>
                                                <li id="menu-item-161"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-161">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nam/ao-thun-nam/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Áo
                                                            thun nam</span></a></li>
                                                <li id="menu-item-160"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-160">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nam/ao-khoac-nam/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Áo
                                                            khoác nam</span></a></li>
                                                <li id="menu-item-162"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-162">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nam/do-lot-nam/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Đồ
                                                            lót nam</span></a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-166"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children  menu-item-166 nav-dropdown-col">
                                            <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nu/"
                                                className="menu-image-title-after"><span className="menu-image-title">Trang phục
                                                    nữ</span></a>
                                            <ul className='nav-column nav-dropdown-simple'>
                                                <li id="menu-item-172"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-172">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nu/so-mi-nu/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Sơ
                                                            mi nữ</span></a></li>
                                                <li id="menu-item-168"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-168">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nu/ao-thun-nu/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Áo
                                                            thun nữ</span></a></li>
                                                <li id="menu-item-171"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-171">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nu/quan-nu/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Quần nữ</span></a></li>
                                                <li id="menu-item-170"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-170">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nu/khan-choang-nu/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Khăn choàng nữ</span></a></li>
                                                <li id="menu-item-167"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-167">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nu/ao-khoac-nu/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Áo
                                                            khoác nữ</span></a></li>
                                                <li id="menu-item-169"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-169">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/trang-phuc-nu/ao-vest-nu/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Áo
                                                            vest nữ</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-153"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children  menu-item-153 nav-dropdown-col">
                                            <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/pierre-cardin/"
                                                className="menu-image-title-after"><span className="menu-image-title">Pierre
                                                    Cardin</span></a>
                                            <ul className='nav-column nav-dropdown-simple'>
                                                <li id="menu-item-155"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-155">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/pierre-cardin/ao-so-mi/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Áo
                                                            sơ mi</span></a></li>
                                                <li id="menu-item-158"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-158">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/pierre-cardin/veston/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Veston</span></a></li>
                                                <li id="menu-item-157"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-157">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/pierre-cardin/quan/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Quần</span></a></li>
                                                <li id="menu-item-156"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-156">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/pierre-cardin/ao-thun/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Áo
                                                            thun</span></a></li>
                                                <li id="menu-item-154"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-154">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/pierre-cardin/ao-khoac/"
                                                        className="menu-image-title-after"><span className="menu-image-title">Áo
                                                            khoác</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-142"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children  menu-item-142 nav-dropdown-col">
                                            <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/"
                                                className="menu-image-title-after"><span className="menu-image-title">Phụ kiện
                                                    &#8211; Phiếu quà tặng</span></a>
                                            <ul className='nav-column nav-dropdown-simple'>
                                                <li id="menu-item-145"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-145">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/giay/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Giày</span></a></li>
                                                <li id="menu-item-149"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-149">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/tat/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Tất</span></a></li>
                                                <li id="menu-item-144"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-144">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/day-nit/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Dây nịt</span></a></li>
                                                <li id="menu-item-152"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-152">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/vi/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Ví</span></a></li>
                                                <li id="menu-item-150"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-150">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/tui-xach/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Túi xách</span></a></li>
                                                <li id="menu-item-151"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-151">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/vali/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Vali</span></a></li>
                                                <li id="menu-item-146"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-146">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/non/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Nón</span></a></li>
                                                <li id="menu-item-148"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-148">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/quan-dui/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Quần đùi</span></a></li>
                                                <li id="menu-item-147"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-147">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/phieu-qua-tang/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Phiếu quà tặng</span></a></li>
                                                <li id="menu-item-143"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-143">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/phu-kien-phieu-qua-tang/ca-vat/"
                                                        className="menu-image-title-after">
                                                        <span className="menu-image-title">Cà  vạt</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-137"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children  menu-item-137 nav-dropdown-col">
                                            <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/khuyen-mai/"
                                                className="menu-image-title-after"><span className="menu-image-title">Khuyến
                                                    mãi</span></a>
                                            <ul className='nav-column nav-dropdown-simple'>
                                                <li id="menu-item-140"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-140">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/khuyen-mai/trang-phuc-nam-khuyen-mai/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Trang phục nam</span></a></li>
                                                <li id="menu-item-141"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-141">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/khuyen-mai/trang-phuc-nu-khuyen-mai/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Trang phục nữ</span></a></li>
                                                <li id="menu-item-139"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-139">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/khuyen-mai/pierre-cardin-khuyen-mai/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Pierre Cardin</span></a></li>
                                                <li id="menu-item-138"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat  menu-item-138">
                                                    <a href="http://mauweb.monamedia.net/anphuoc/danh-muc/khuyen-mai/phu-kien-phieu-qua-tang-khuyen-mai/"
                                                        className="menu-image-title-after"><span
                                                            className="menu-image-title">Phụ kiện &#8211; Phiếu quà
                                                            tặng</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li id="menu-item-132"
                                    className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-132"><a
                                        href="http://mauweb.monamedia.net/anphuoc/he-thong-cua-hang/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Hệ
                                            thống cửa hàng</span></a></li>
                                <li id="menu-item-23"
                                    className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-23"><a
                                        href="http://mauweb.monamedia.net/anphuoc/lien-he/"
                                        className="menu-image-title-after nav-top-link"><span className="menu-image-title">Liên
                                            hệ</span></a></li>
                                <li
                                    className="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children">
                                    <a href="#" className="is-small"><i className="icon-search"></i></a>
                                    <ul className="nav-dropdown nav-dropdown-simple">
                                        <li className="header-search-form search-form html relative has-icon">
                                            <div className="header-search-form-wrapper">
                                                <div className="searchform-wrapper ux-search-box relative form- is-normal">
                                                    <form method="get" className="searchform"
                                                        action="http://mauweb.monamedia.net/anphuoc/" role="search">
                                                        <div className="flex-row relative">
                                                            <div className="flex-col flex-grow">
                                                                <input type="search" className="search-field mb-0" name="s"
                                                                    value="" placeholder="Tìm kiếm&hellip;" />
                                                                <input type="hidden" name="post_type" value="product" />
                                                            </div>
                                                            <div className="flex-col">
                                                                <button type="submit"
                                                                    className="ux-search-submit submit-button secondary button icon mb-0">
                                                                    <i className="icon-search"></i> </button>
                                                            </div>
                                                        </div>
                                                        <div className="live-search-results text-left z-top"></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="cart-item has-iconhas-dropdown">
                                    <a href="http://mauweb.monamedia.net/anphuoc/gio-hang/" title="Giỏ hàng"
                                        className="header-cart-link is-small">
                                        <i className="icon-shopping-bag" data-icon-label="0">
                                        </i>
                                    </a>
                                    <ul className="nav-dropdown nav-dropdown-simple">
                                        <li className="html widget_shopping_cart">
                                            <div className="widget_shopping_cart_content">
                                                <p className="woocommerce-mini-cart__empty-message">Chưa có sản phẩm trong
                                                    giỏ hàng.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-col show-for-medium flex-right">
                            <ul className="mobile-nav nav nav-right ">
                                <li className="cart-item has-icon">
                                    <a href="http://mauweb.monamedia.net/anphuoc/gio-hang/"
                                        className="header-cart-link off-canvas-toggle nav-top-link is-small"
                                        data-open="#cart-popup" data-className="off-canvas-cart" title="Giỏ hàng"
                                        data-pos="right">

                                        <i className="icon-shopping-bag" data-icon-label="0">
                                        </i>
                                    </a>
                                    <div id="cart-popup" className="mfp-hide widget_shopping_cart">
                                        <div className="cart-popup-inner inner-padding">
                                            <div className="cart-popup-title text-center">
                                                <h4 className="uppercase">Giỏ hàng</h4>
                                                <div className="is-divider"></div>
                                            </div>
                                            <div className="widget_shopping_cart_content">
                                                <p className="woocommerce-mini-cart__empty-message">Chưa có sản phẩm trong
                                                    giỏ hàng.</p>
                                            </div>
                                            <div className="cart-sidebar-content relative"></div>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="header-bg-container fill">
                    <div className="header-bg-image fill"></div>
                    <div className="header-bg-color fill"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;