import { Link, Outlet } from "react-router-dom";
export default function LayoutAdmin() {
  return (
    <div>
      <ul className="layoutadmin" style={{ display: 'flex'}}>
        <li style={{ listStyleType: 'none', marginLeft: 40 }}>
          <Link style={{textDecoration: 'none'}} to="/">TRANG CHỦ</Link>
        </li>
        <li style={{ listStyleType: 'none', marginLeft: 40 }}>
          <Link style={{textDecoration: 'none'}} to="/admin">DASHBOARD</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}} to="/admin/category">DANH MỤC</Link>
        </li>
        <li style={{ listStyleType: 'none', marginLeft: 40 }}>
          <Link style={{textDecoration: 'none'}} to="product">QUẢN TRỊ SẢN PHẨM</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40 }}>
          <Link style={{textDecoration: 'none'}} to="product/add">THÊM SẢN PHẨM MỚI</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
