import { useState } from 'react'
import { lightTheme, darkTheme, starTheme } from '../theme'

export const useStarMode = () => {
    const [theme, setTheme] = useState('light')
        
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleStarTheme = () => {
        if (theme === lightTheme || darkTheme) {
            setMode(starTheme)
        }
    }

    return [theme, toggleStarTheme]
}