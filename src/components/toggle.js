import React, { useState } from 'react'
import { ThemeProvider } from '../provider'
import styled from 'styled-components'

const Toggle = () => {
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
        <ThemeProvider.Consumer>
            <>
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
                </footer>
            </>
        </ThemeProvider.Consumer>
    )
}

export default Toggle

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;