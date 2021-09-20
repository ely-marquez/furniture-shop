import * as React from 'react';
import { Nav, NavItem } from "reactstrap";
import './Navly.css';

const Navly = () => {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  return <Nav justified className="navly fixed-bottom align-items-center bg-light">
    <NavItem className="text-primary" onClick={() => setSelectedIdx(0)}>
      <i className={"navly-item bi bi-house-door" + (selectedIdx === 0 ? "-fill" : "")}></i>
    </NavItem>
    <NavItem className="text-primary" onClick={() => setSelectedIdx(1)}>
      <i className={"navly-item bi bi-heart" + (selectedIdx === 1 ? "-fill" : "")}></i>
    </NavItem>
    <NavItem className="text-primary" onClick={() => setSelectedIdx(2)}>
      <i className={"navly-item bi bi-cart" + (selectedIdx === 2 ? "-fill" : "")}></i>
    </NavItem>
    <NavItem className="text-primary" onClick={() => setSelectedIdx(3)}>
      <i className={"navly-item bi bi-file-person" + (selectedIdx === 3 ? "-fill" : "")}></i>
    </NavItem>
  </Nav>;
}

export default Navly;