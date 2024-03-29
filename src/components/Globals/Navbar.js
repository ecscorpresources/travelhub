import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  let location = props.location.pathname;
  let navColorClasses = " navbar navbar-expand-lg navbackground";
  if (location !== "/") {
    navColorClasses = "navbar navbar-expand-lg resortnavbackground";
  }
  return (
    <>
      <nav className={navColorClasses}>
        <Link className="nav-brand" to="/">
          <img
<<<<<<< HEAD:src/components/includes/Navbar.js
            src={require("../../assets/img/Carlay_logo.png")}
            alt="logo"
            className="mt-2"
=======
            src={require("../../assets/img/home/Carlaylogo.png")}
            alt="brand logo"
>>>>>>> c6412f448bd29c6411086c7b323e18026b09472d:src/components/Globals/Navbar.js
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="d-flex justify-content-between collapse navbar-collapse"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav  mt-2 mt-lg-0 links homeNavLinks">
            <li className="nav-item active">
              <Link className="nav-link links" to="/">
                Resort
              </Link>
            </li>
            <li className="nav-item links dropdown">
              <a
                className="nav-link links dropdown-toggle"
                href="#!"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other Services
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="resortshotels">
                  RESORTS & HOTELS
                </Link>
                <Link className="dropdown-item" to="toursguides">
                  TOURS & GUIDE
                </Link>
                <Link className="dropdown-item" to="carrentals">
                  CAR RENTALS
                </Link>
                <Link className="dropdown-item" to="cruise">
                  CRUISE
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link links" to="/learning">
                Let's Talk
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav  homeLoginSignup">
            <li>
              <Link className="loginsignup signup" to="/signin">
                SignIn
              </Link>
            </li>
            <li>
              <Link className="loginsignup login" to="/signup">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
