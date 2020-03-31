import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme'
import { useOnClickOutside } from '../hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './Navigation'
import styled from 'styled-components'
import SunIcon from '../images/iconfinder_sun_simple_367526.png'

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <modeButton>
          <img className='mode-button' src={SunIcon} alt="sun icon light mode button" />
        </modeButton>
        <div>
          <h1>Hello. This is a burger menu demo</h1>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    </ThemeProvider>
  )
}

export default App

const modeButton = styled.button`
  display: flex;
  
  img {
    height: 36px;
    width: 36px;
  }
`
