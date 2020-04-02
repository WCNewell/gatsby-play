import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as MoonIcon } from '../images/moon.png'
import { ReactComponent as SunIcon } from '../images/iconfinder_sun_simple_367526.png'

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light'
    return (
        <button onClick={toggleTheme}>
            <SunIcon />
            <MoonIcon />
        </button>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle

