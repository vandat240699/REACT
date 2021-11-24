import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return user.role === "admin" ? (
    <ul>
      <li>
        <Link to="/admin">Dashboard</Link>
      </li>
      <li>
        <Link to="product">Product Manager</Link>
      </li>
      <li>
        <Link to="product/add">Add Product</Link>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <Link to="/">Home Page</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
      <li>
        <Link to="/product/123">Chi tiet</Link>
      </li>
      <li>
        <Link to="/category">Danh muc</Link>
      </li>
      <li>
        <Link to="/admin">Quản trị</Link>
      </li>
    </ul>
  );
};
export default Header;
