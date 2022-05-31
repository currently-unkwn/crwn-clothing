import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>

        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </nav>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
