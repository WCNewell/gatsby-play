import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStarMode } from './useStarMode'
import { GlobalStyles } from '../styles/global-styles'
import { lightTheme, darkTheme, starTheme } from '../styles/themes'
import Toggle from './toggle'
import Nav from './nav'

const App = () => {
    const [theme, themeToggler] = useStarMode()
    
    const themeMode = theme === 'light' ? lightTheme : darkTheme
    // ^^ Ugh, always with the ternary, need to still figure out how to get triple conditions

   
    return (
        
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <header>
                    <Toggle theme={theme} toggleTheme={themeToggler}/>
                    <Nav />
                </header>
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