import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { lightTheme, darkTheme, starTheme } from '../styles/theme'
import useDarkMode from 'use-dark-mode'
import styled from 'styled-components'
import '../styles/styles.scss'

import Nav from './nav'
import StarLayout from '../styles/star-layout'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

const App = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme)
    const darkMode = useDarkMode(false)
    
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

    return (
        <ThemeProvider theme={theme}>
            <>
                {theme === starTheme ? <StarLayout/> : null}
                <GlobalStyles />
                <header>
                    <div>
                        <ModeIcons>
                            <SunIcon    className='mode-icon'
                                        onClick={() => {
                                            toggleLightTheme()
                                            darkMode.disable()
                                        }}
                                        alt='sun icon for light mode'
                            />
                            <MoonIcon   className='mode-icon' 
                                        onClick={() => {
                                            toggleDarkTheme()
                                            darkMode.enable()
                                        }}
                                        alt='moon icon for dark mode'
                            />
                            <StarsIcon  className='mode-icon'
                                        onClick={() => {
                                            toggleStarTheme()
                                            darkMode.enable()
                                        }}
                                        alt='stars icon for star mode'
                            />
                        </ModeIcons>
                    </div>
                    <Nav />
                </header>
                    <main>
                        {children}
                    </main>
                <footer>
                    © {new Date().getFullYear()} Clark Newell, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
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