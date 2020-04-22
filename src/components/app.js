import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { useLightMode } from './modes/useLightMode'
import { useDarkMode } from './modes/useDarkMode'
import { useStarMode } from './modes/useStarMode'
import Nav from './nav'
import styled from 'styled-components'

import SunIcon from '../images/sunpng.png'
import MoonIcon from '../images/moonpng.png'
import StarIcon from '../images/starpng.png'

const App = () => {
    const [lightTheme, toggleLightTheme, componentMounted] = useLightMode()
    const [darkTheme, toggleDarkTheme] = useDarkMode()
    const [starTheme, toggleStarTheme] = useStarMode()

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
        <ThemeProvider theme={() => ({themeMode})}>
            <>
                <GlobalStyles />
               <>
                    <ModeButton theme={lightTheme} onClick={toggleLightTheme}>
                        <img src={SunIcon} alt="Sun icon for light mode" />
                    </ModeButton>
                    <ModeButton theme={darkTheme} onClick={toggleDarkTheme}>
                        <img src={MoonIcon} alt="Moon icon for dark mode" />
                    </ModeButton>
                    <ModeButton theme={starTheme} onClick={toggleStarTheme}>
                        <img src={StarIcon} alt="Star icon for star mode" />
                    </ModeButton>
                </>
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

const ModeButton = styled.div`
    display: flex;
    flex-flow: row norwap;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    padding-bottom: 10px;

    img {
        width: 50px;
        height: 50px;

        &:first-of-type {
            margin-right: 10px;
        }
    }
`