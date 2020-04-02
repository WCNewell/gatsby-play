import React, { useState }from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { lightTheme, darkTheme } from './theme'
import styled from 'styled-components'
import Header from './header'
import SunIcon from '../images/iconfinder_sun_simple_367526.png'


const App = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
  
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                    <Header />
                    <div>
                        <ModeButton onClick={toggleTheme}>
                            <img className='mode-button' src={SunIcon} alt="sun icon light mode button" />
                        </ModeButton>
                    </div>
                    <div>
                        <h1>Hello. React hook demo for burger menu ala mode</h1>
                    </div>
                    <footer>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                        <h5>Icons made by Freepik from www.flaticon.com</h5>
                    </footer>
            </>  
        </ThemeProvider>
    )
}

export default App

const ModeButton = styled.button`
    display: flex;
  
    img {
        height: 36px;
        width: 36px;
    }
`


