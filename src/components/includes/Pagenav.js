import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Pagenav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">

          {/* <img
            src={require("../../assets/img/fusioncampaignlogo.png")}
            alt=""
          /> */}
          <h1>Travel Hub</h1>
          <img
            src={require("../../assets/img/fusioncampaignlogo.png")}
            alt=""
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="homeNavLinks">
            <NavItem>
              <NavLink href="monhkey" className="links">
                Flight
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monhkey" className="links">
                Hotels
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monkhey" className="links">
                Car Rentals
              </NavLink>
            </NavItem>
           
          </Nav>

          <Nav navbar className="homeLoginSignup">
            <NavItem>
              <NavLink href="monhkey" className="loginsignup login">
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monhkey" className="loginsignup signup">
                Log In
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Pagenav;
