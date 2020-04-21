import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { useMode } from './mode'
import { lightTheme, darkTheme, starTheme } from './theme'
import Nav from './nav'
import Toggle from './toggle'

const App = () => {
    const [theme, toggleLightTheme, toggleDarkTheme, toggleStarTheme, componentMounted] = useMode()
      
    // const themeMode = (theme) === 'light' ? lightTheme : starTheme
    
    const themeMode = (theme) => {    

        if (theme === 'light') {
            return lightTheme
        } else if (theme === 'dark') {
            return darkTheme
        } else {
            return starTheme
        }
    }
    
    if (!componentMounted) {
        return <div />
    }

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <Toggle theme={theme}
                        toggleLightTheme={toggleLightTheme} 
                        toggleDarkTheme={toggleDarkTheme}
                        toggleStarTheme={toggleStarTheme} />
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