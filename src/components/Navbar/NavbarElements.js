import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  
`;

export const Nav2 = styled.nav`
  background: #0d0909;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-right: 25px;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
    width: 80%;
    font-size: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  margin-left: 25px;
  top: 25px;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(AiOutlineBars)`
  font-size: 2rem;
  margin-left: 25px;
  transform: translate(-50%, -15%);
`;