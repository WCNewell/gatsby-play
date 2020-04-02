import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global';
import Header from './header'

const App = () => {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles />
        <Header />
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


