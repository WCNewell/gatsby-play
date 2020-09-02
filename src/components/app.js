import React from 'react'
import useDarkMode from 'use-dark-mode'
import Header from './header'
import Footer from './footer'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'

import StarLayout from './star-layout'
import styled from 'styled-components'
import '../styles/global-styles.scss'

export const ThemeContext = React.createContext('day')

const App = ({ children }) => {
    const [theme, setTheme] = React.useState('night')
    const darkMode = useDarkMode(false)

    
    const toggleTheme = () => {
        theme === darkMode ? setTheme('night') : setTheme('day')
    }
    
    return (
        <ThemeContext.Provider value={'night'}>
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
                                alt='moon icon for dark star mode'
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
        theme === 'night' ? <StarLayout /> : null
    )
}

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;
`