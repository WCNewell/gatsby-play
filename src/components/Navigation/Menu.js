import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components'
import { Link } from 'gatsby'

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        home
      </Link>
      <Link to="/about" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        about
        </Link>
      <Link to="/contact" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        contact
        </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #663366;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: -275px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #effffa
    text-decoration: none;
    transition: color 0.3s linear;


    &:hover {
      color: #ff000cc;
    }
  }
`