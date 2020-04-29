import React, { useState }from 'react'
import { ThemeProvider } from 'styled-components'
import lightTheme from ;
import Nav from './nav'
import styled from 'styled-components'

// import SunIcon from '../images/sunpng.png'
// import MoonIcon from '../images/moonpng.png'
// import StarIcon from '../images/starpng.png'

import SunIcon from '../assets/sun-svg.svg'
import MoonIcon from '../assets/moon-svg.svg'
import StarsIcon from '../assets/stars-svg.svg'

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
               <>
                    
                    <SunIcon onClick={toggleLightTheme} alt='sun icon for light theme' />
                    <MoonIcon onClick={toggleDarkTheme} alt='moon icon for dark theme' />
                    <StarsIcon onClick={toggleStarTheme} alt='stars icon for star theme'/>
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
    padding-bottom: 10px;
    fill: gold;
    width: 50px;
    height: 50px;

    &:first-of-type {
            margin-right: 10px;
    }
    
`