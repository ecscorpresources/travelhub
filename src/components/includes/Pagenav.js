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
                Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monhkey" className="links">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monkhey" className="links">
                Demo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monkhey" className="links">
                Support
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar className="homeLoginSignup">
            <NavItem>
              <NavLink href="monhkey" className="loginsignup login">
                LOG IN
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monhkey" className="loginsignup signup">
                SIGN UP
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Pagenav;
