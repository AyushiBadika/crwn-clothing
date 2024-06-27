import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assests/crown.svg";
import "./navigation.styles.scss";
export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={CrwnLogo} alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/auth" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
