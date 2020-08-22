import React from 'react'
import useDarkMode from 'use-dark-mode'
import { lightTheme, darkTheme, starTheme } from '../styles/theme'
import Header from './header'
import Footer from './footer'
import '../styles/styles.scss'
// import StarLayout from './star-layout'
import styled from 'styled-components'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

export const ThemeContext = React.createContext()

const initialState = {
    theme: lightTheme 
}

const reducer = (state, action) => {
    switch (action.type) {
        case "Dark":
            return {
                ...state,
                theme: darkTheme
            }
        case "Star":
            return {
                ...state,
                theme: starTheme
            }
        default: 
            return state
    }
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const [theme, setTheme] = React.useState(lightTheme)
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
        <ThemeContext.Provider
            value={{
                state,
                dispatch
            }}
        >
        <>
            <Header />
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
                    {children}
                <Footer />
            </>
        </ThemeContext.Provider>
    )
}

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;    
`