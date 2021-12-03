import { Link, Outlet } from "react-router-dom";

export default function LayoutWebsite2() {
  return (
    <div >
      <ul className="layoutwebsite" style={{display: 'flex'}}>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}}  to="/product">TRANG CHỦ</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}} to="/admin">QUẢN TRỊ</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}} to="/signup/">ĐĂNG KÝ</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}} to="/signin/">ĐĂNG NHẬP</Link>
        </li>
        <li style={{listStyleType: 'none', marginLeft: 40}}>
          <Link style={{textDecoration: 'none'}} to="/cart/"><img src="https://lh3.googleusercontent.com/proxy/GrlKlQGR-P_DTWRmxX58C4_mXY3qmDKf9i1Y0xEqx5DeVAOdN6ujb8Ct0Wqf3zNEfd7L-Fw9QDprxUz7wIukn5SSoQUL6tfew_iS24EM7kYF" alt="" /></Link>
        </li>
      </ul>
      {/* < Banner/> */}
      <Outlet />
    </div>
  );
}