import * as React from 'react';
import { Container } from 'reactstrap';
// import NavMenu from './NavMenu';
import Navly from './Navly';

export default (props: { children?: React.ReactNode }) => (
  <React.Fragment>
    {/* <NavMenu/> */}
    <Navly />
    <Container>
      {props.children}
    </Container>
  </React.Fragment>
);
