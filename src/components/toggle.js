import React, { useState } from 'react'
import { ThemeContext } from '../../provider'
import styled from 'styled-components'

import lightTheme from './themes/lightTheme'
import darkTheme from './themes/darkTheme'
import starTheme from './themes/starTheme'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

const Toggle = () => {
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
        <ThemeContext.Consumer>
            <>
                <ModeIcons>
                    <SunIcon    className='mode-icon'
                                onClick={toggleLightTheme}
                                alt='sun icon for light mode'
                    />
                    <MoonIcon   className='mode-icon' 
                                onClick={toggleDarkTheme}
                                alt='moon icon for dark mode'
                    />
                    <StarsIcon  className='mode-icon'
                                onClick={toggleStarTheme}
                                alt='stars icon for star mode'
                    />
                </ModeIcons>
            </>
        </ThemeContext.Consumer>
    )
}

export default Toggle

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;
`