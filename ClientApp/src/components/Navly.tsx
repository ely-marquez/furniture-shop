import * as React from 'react';
import { Nav, NavItem, NavLink } from "reactstrap";
import './Navly.css';

const Navly = () => {
  return <div className="navly fixed-bottom">
    <Nav justified className="navly__nav">
      <NavItem>
        <i className="fas fa-home"></i>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </NavItem>
    </Nav>
  </div>;
}

export default Navly;