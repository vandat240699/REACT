import { Link, Outlet } from "react-router-dom";

export default function LayoutWebsite() {
  return (
    <div >
      <ul className="layoutwebsite" style={{display: 'flex'}}>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}}  to="/">TRANG CHỦ</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}}  to="/product">PRODUCT</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}} to="/admin">QUẢN TRỊ</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}} to="signup">ĐĂNG KÝ</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}} to="signin">ĐĂNG NHẬP</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}