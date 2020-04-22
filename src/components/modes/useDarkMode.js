import { useState } from 'react'
import { lightTheme, darkTheme, starTheme } from '../theme'

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light')

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleDarkTheme = () => {
        if (theme === lightTheme || starTheme) {
            setMode(darkTheme)
        }
    }

    return [theme, toggleDarkTheme]
}