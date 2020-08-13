import React, { useState }from 'react'
import styled from 'styled-components'
import { lightTheme, darkTheme, starTheme } from '../styles/theme'
import useDarkMode from 'use-dark-mode'
import { StarContext } from './star-mode'
import StarLayout from '../styles/star-layout'
import Header from './header'
import Footer from './footer'

import '../styles/styles.scss'
import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

const App = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme)
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
        <StarContext.Consumer>
            {value => (
                <>
                    {theme === starTheme ? <StarLayout /> : null}
                    <div>
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
                        <main>
                            {children}
                        </main>
                    </div>
                    <Footer />
                </>
            )}
        </StarContext.Consumer>
    )
} 

export default App

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;    
`