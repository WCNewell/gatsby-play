import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { lightTheme, darkTheme, starTheme } from '../styles/theme'
import styled from 'styled-components'
import '../styles/styles.css'

import Nav from './nav'
// import BaseLayout from '../styles/base-layout'
// import StarLayout from '../styles/star-layout'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

const App = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme)
    // const [layout, setStarLayout] = useState(starTheme)
    
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

    // function if theme === !lightTheme then inject starLayout

    // const isStarTheme = () => {
    //     if (theme === starTheme) {
    //             setTheme(<StarLayout />)
    //     }
    //     return <Layout />
    // }
    
    // const toggleStarLayout = () => {
    //     if (theme === !lightTheme || !darkTheme) {
    //         return <StarLayout />
    //     }
    //     return <StarLayout />
    // }
    
    // const toggleStarLayout = () => {
    //     if (theme === starTheme) {
    //         setStarLayout(StarLayout)
    //     }
    // }

    return (
        <ThemeProvider theme={theme}>
            <>
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
                    © {new Date().getFullYear()}, Built with
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