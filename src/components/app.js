import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { lightTheme, darkTheme, starTheme } from '../styles/theme'
import styled from 'styled-components'
import '../styles/styles.css'

import Nav from './nav'
import StarLayout from '../styles/star-layout'
import BaseLayout from '../styles/base-layout'


import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;    
`

const App = ({ children }) => {
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

    return (
        <ThemeProvider theme={theme}>
            <>
                {theme === starTheme ? <StarLayout/> : <BaseLayout/>}
                <GlobalStyles />
                <header>
                    <div>
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
                    </div>
                    <Nav />
                </header>
                    <main>{children}</main>
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