import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Pagenav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" transparent="true" expand="md">
        <NavbarBrand href="/">
          <img src={require("../../assets/img/Carlaylogo.png")} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="homeNavLinks">
            <NavItem>
              <NavLink href="monhkey" className="links">
                Resort
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="links">
                Other Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/resorts_hotels">Resort & Hotels</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/tours_guides">Tours & Guide</Link>
                </DropdownItem>
                <DropdownItem>Car Rentals</DropdownItem>
                <DropdownItem>Cruise</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="monkhey" className="links">
                Lets Talk
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

export default withRouter(Pagenav);
