import { useState } from 'react'
import { starTheme } from '../theme'

export const useStarMode = () => {
    const [theme, setTheme] = useState('light')
        
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleStarTheme = () => {
        if (theme === 'light' || 'dark') {
            setMode(starTheme)
        }
    }

    return [theme, toggleStarTheme]
}