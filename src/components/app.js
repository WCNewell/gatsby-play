import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { useMode } from './mode'
import { lightTheme, darkTheme } from './theme'
import Nav from './nav'
import Toggle from './toggle'

const App = () => {
    const [theme, toggleTheme, componentMounted] = useMode()
    const themeMode = theme === 'light' ? lightTheme : darkTheme
    
    if (!componentMounted) {
        return <div />
    }

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <Nav />
                <div>
                    <h1>Hello. React hook demo for burger menu ala mode</h1>
                </div>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                    <h5>Icons from iconfinder.com</h5>
                </footer>
            </>  
        </ThemeProvider>
    )
}

export default App