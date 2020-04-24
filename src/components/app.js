import React, { useState }from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { lightTheme, darkTheme, starTheme } from './theme';
import Nav from './nav'
import styled from 'styled-components'

import SunIcon from '../images/sunpng.png'
import MoonIcon from '../images/moonpng.png'
import StarIcon from '../images/starpng.png'

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

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
               <>
                    <ModeButton onClick={toggleLightTheme}>
                        <img src={SunIcon} alt="Sun icon for light mode" />
                    </ModeButton>
                    <ModeButton onClick={toggleDarkTheme}>
                        <img src={MoonIcon} alt="Moon icon for dark mode" />
                    </ModeButton>
                     <ModeButton onClick={toggleStarTheme}>
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