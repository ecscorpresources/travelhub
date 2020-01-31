import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link className="nav-brand" to="/">
          <img src={require("../../assets/img/Carlaylogo.png")} alt="" />
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

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav  mt-2 mt-lg-0 links homeNavLinks">
            <li className="nav-item active">
              <Link className="nav-link links" to="/">
                Resort
              </Link>
            </li>
            <li className="nav-item links dropdown">
              <Link
                className="nav-link links dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other Services
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="resorts_hotels">
                  RESORTS & HOTELS
                </Link>
                <Link className="dropdown-item" to="tours_guides">
                  TOURS & GUIDE
                </Link>
                <Link className="dropdown-item" to="car_rental">
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
                Sign In
              </Link>
            </li>
            <li>
              <Link className="loginsignup login" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;