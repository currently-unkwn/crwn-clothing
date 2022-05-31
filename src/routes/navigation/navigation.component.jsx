import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
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
