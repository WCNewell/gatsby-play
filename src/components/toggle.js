import React from 'react'
import styled from 'styled-components';

import SunIcon from '../images/sunpng.png'
import MoonIcon from '../images/moonpng.png'
import StarIcon from '../images/starpng.png'

const Toggle = ({ toggleTheme }) => {
    

    return (
        <ModeButton onClick={toggleTheme}>
            <img src={SunIcon} alt="Sun icon for light mode" />
            <img src={MoonIcon} alt="Moon icon for dark mode" />
            <img src={StarIcon} alt="Star icon for star mode" />
        </ModeButton>
    )
}

export default Toggle

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