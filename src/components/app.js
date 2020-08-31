import React from 'react'
import useDarkMode from 'use-dark-mode'
import Header from './header'
import Footer from './footer'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'

import StarLayout from './star-layout'
// import lightTheme from './light-theme'
// import darkTheme from './dark-theme'
import styled from 'styled-components'
import '../styles/global-styles.scss'

export const ThemeContext = React.createContext('light')

const App = ({ children }) => {
    const [theme, setTheme] = React.useState('light')
    const darkMode = useDarkMode(false)

    
    const toggleTheme = () => {
        theme === darkMode ? setTheme('dark') : setTheme('light')
    }
    
    return (
        <ThemeContext.Provider value={'dark'}>
        <>
            <Layout />
                <ModeIcons>
                    <SunIcon    className='mode-icon'
                                onClick={() => {
                                    toggleTheme()
                                    darkMode.disable()
                                }}
                                alt='sun icon for light mode'
                    />
                    <MoonIcon   className='mode-icon' 
                                onClick={() => {
                                    toggleTheme()
                                    darkMode.enable()
                                }}
                                alt='moon icon for dark mode'
                    />
                </ModeIcons>
                <Header />
                    {children}
                <Footer />
        </>
        </ThemeContext.Provider>
    )
}

export default App

const Layout = () => {
    const theme = React.useContext(ThemeContext)
    return (
        theme === 'dark' ? <StarLayout /> : null
    )
}

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;
`