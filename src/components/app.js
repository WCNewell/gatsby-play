import React, { useState }from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { lightTheme, darkTheme } from './theme';
import Nav from './nav'
import styled from 'styled-components'

import SunIcon from '../images/sunpng.png'
import MoonIcon from '../images/moonpng.png'

const App = () => {
    const [theme, setTheme] = useState(lightTheme)

    const toggleTheme = () => {    
        if (theme === lightTheme) {
            setTheme(darkTheme)
        } else {
            setTheme(lightTheme)
        }
    }
    
    return (
        <ThemeProvider theme={theme === lightTheme ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
               <>
                    <ModeButton onClick={toggleTheme}>
                        <img src={SunIcon} alt="Sun icon for light mode" />
                    </ModeButton>
                    <ModeButton onClick={toggleTheme}>
                        <img src={MoonIcon} alt="Moon icon for dark mode" />
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