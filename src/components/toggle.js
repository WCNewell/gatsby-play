import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as MoonIcon } from '../images/moon.png'
import { ReactComponent as SunIcon } from '../images/iconfinder_sun_simple_367526.png'

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light'
    return (
        <ToggleContainer onClick={toggleTheme}>
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle

const ToggleContainer = styled.button`
    background: ${({ theme }) => them.gradient}
    border: 2px solid ${({ theme }) => theme.toggleBorder}
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 8rem;
    height: 4rem;

    img {
        height: auto;
        width: 2.5rem;
        transition: all 0.3s linear;

        // sun icon
        &:first-child {
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'}
        
        // moon icon
        &:second-child {
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'} 
        }
    }
`