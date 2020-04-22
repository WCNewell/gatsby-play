import { useState } from 'react'
import { darkTheme } from '../theme'

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light')
    
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleDarkTheme = () => {
        if (theme === 'light' || 'star') {
            setMode(darkTheme)
        }
    }

    return [theme, toggleDarkTheme]
}