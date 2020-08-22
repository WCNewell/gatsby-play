import React from 'react'
import styled from 'styled-components'

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'
import StarsIcon from '../assets/stars.inline.svg'

const Toggle = () => {
    return (
        <>
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
        </>
    )
}

export default Toggle

const ModeIcons = styled.div`
    display: flex;
    justify-content: center;    
`