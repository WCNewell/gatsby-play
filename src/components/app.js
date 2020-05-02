import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { lightTheme, darkTheme, starTheme } from './theme'
import styled from 'styled-components'
import '../components/styles/styles.css'

import Nav from './nav'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

const App = () => {
    const [theme, setTheme] = useState(lightTheme)
 
    const toggleLightTheme = () => {
        if (theme === darkTheme || starTheme) {
            setTheme(lightTheme)
        }
    }
    
    const toggleDarkTheme = () => {
        if (theme === lightTheme || starTheme) {
            setTheme(darkTheme)
        }
    }
    
    const toggleStarTheme = () => {
        if (theme === lightTheme || darkTheme) {
            setTheme(starTheme)
        }
    }

    // function if theme === starTheme then use Layout and Sass

    return (
        <ThemeProvider theme={theme}>
            <>
               <GlobalStyles /> 
                    <ModeIcons>
                        <SunIcon    className='mode-icon'
                                    onClick={toggleLightTheme}
                                    alt='sun icon for light mode'
                        />
                        <MoonIcon   className='mode-icon' 
                                    onClick={toggleDarkTheme}
                                    alt='moon icon for dark mode'
                        />
                        <StarsIcon  className='mode-icon'
                                    onClick={toggleStarTheme}
                                    alt='stars icon for star mode'
                        />
                    </ModeIcons>
                <Nav />
                <div>
                    <h1>Hello. React hook demo for burger menu ala mode with Styled-Components and Sass.</h1>
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

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;
    
`