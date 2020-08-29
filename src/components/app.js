import React, { useState, useContext } from 'react'
import useDarkMode from 'use-dark-mode'
import Header from './header'
import Footer from './footer'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

import styled from 'styled-components'
import '../styles/styles.scss'

const themes = {
    light: {
        text: '#0d0c1d'
    },
    dark: {
        text: '#effffa'
    }
}

const ThemeContext = React.createContext(themes.light)

const App = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)
    const darkMode = useDarkMode(false)
    const mode = useContext(ThemeContext)
    
    
    // const toggleLightTheme = () => {
    //     if (theme === 'dark' || 'star') {
    //         setTheme('light')
    //     }
    // }
    
    // const toggleDarkTheme = () => {
    //     if (theme === 'light' || 'star') {
    //         setTheme('dark')
    //     }
    // }
    
    // const toggleStarTheme = () => {
    //     if (theme === 'light' || 'dark') {
    //         setTheme('star')
    //     }
    // }

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ color: mode.text }} >
                <ModeIcons>
                    <SunIcon    className='mode-icon'
                                onClick={() => {
                                    // toggleLightTheme()
                                    darkMode.disable()
                                }}
                                alt='sun icon for light mode'
                    />
                    <MoonIcon   className='mode-icon' 
                                onClick={() => {
                                    // toggleDarkTheme()
                                    darkMode.enable()
                                }}
                                alt='moon icon for dark mode'
                    />
                    <StarsIcon  className='mode-icon'
                                onClick={() => {
                                    // toggleStarTheme()
                                    darkMode.enable()
                                }}
                                alt='stars icon for star mode'
                    />
                </ModeIcons>
                <Header />
                    {children}
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default App

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;
`