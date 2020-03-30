import React, { useState } from 'react';
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'


export default () => {

  const [menuState, setMenuOpen] = useState({menuOpen: false});

  const closeMenu = () => {
    setMenuOpen({menuOpen: false})
  }

  return (
    <>
        <TopNav className="sticky-top">
            
            <SideMenu>
              <Menu right disableAutoFocus isOpen={ menuState.menuOpen }>

                <Link className="menu-item" to="/" onClick={() => closeMenu() }>
                  Home
                </Link>
                
                <Link className="menu-item" to="/about" onClick={() => closeMenu() }>
                  About
                </Link>

                <Link className="menu-item" to="/portfolio" onClick={() => closeMenu() }>
                  Portfolio
                </Link>

                <Link className="menu-item" to="/contact" onClick={() => closeMenu() }>
                  Contact
                </Link>
              </Menu>
            </SideMenu>

        </TopNav>
    </>
)}

const TopNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1101;
    top: 0;
    width: 100vw;
`

const SideMenu =  styled.div`
    /* Individual item */
    .bm-item {
        display: inline-block;

        /* Our sidebar item styling */
        text-decoration: none;
        margin-bottom: 10px;
        color: #ffffff;
        transition: color 0.2s;
    }
    
    /* Change color on hover */
    .bm-item:hover {
      color: white;
    }
    
    /* Position and sizing of burger button */
    .bm-burger-button {
    position: fixed;
    width: 40px;
    height: 30px;
    right: 36px;
    top: 36px;
    }
    
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
    background: #ff0dbf;
    }
    
    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
    background: #1c97cc;
    }
    
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
    height: 100px;
    width: 100px;
    }
    
    /* Color/shape of close button cross */
    .bm-cross {
    background: #ff0dbf;
    }
    
    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
    position: fixed;
    height: 100%;
    }
    
    /* General sidebar styles */
    .bm-menu {
    background: #ffffff;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    }
    
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
    fill: #373a47;
    }
    
    /* Wrapper for item list */
    .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
    }
    
    /* Individual item */
    .bm-item {
    display: inline-block;
    }
    
    /* Styling of overlay */
    .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    }
`