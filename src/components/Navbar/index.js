import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to='/'>At Your Fingertips Car Sales</NavLink>
            <NavIcon onClick={toggle}>
                <p>Inventory</p>
                <Bars />
            </NavIcon>
        </Nav>
    </>
  );
};

export default Navbar;
