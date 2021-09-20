import * as React from 'react';
import { Container } from 'reactstrap';
// import NavMenu from './NavMenu';
import Navly from './Navly';

export default (props: { children?: React.ReactNode }) => (
  <React.Fragment>
    {/* <NavMenu/> */}
    <Container>
      {props.children}
    </Container>
    <Navly />
  </React.Fragment>
);
