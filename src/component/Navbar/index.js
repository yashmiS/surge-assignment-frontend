import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/user-details" activeStyle>
            User Details
          </NavLink>
          <NavLink to="/notes" activeStyle>
            Notes
          </NavLink>
          <NavLink to="/user-list" activeStyle>
            User List
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
