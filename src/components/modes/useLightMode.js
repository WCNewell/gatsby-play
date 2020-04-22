import { useEffect, useState } from 'react'
import { darkTheme, starTheme } from '../theme'

export const useLightMode = () => {
    const [theme, setTheme] = useState('light')
    
    const [componentMounted, setComponentMounted] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleLightTheme = () => {
        if (theme === darkTheme || starTheme) {
            setMode('light')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
            if (localTheme) {
                setTheme(localTheme)
            } else {
                setMode('light')
            }
            setComponentMounted(true)
    }, [])

    return [theme, toggleLightTheme, componentMounted]
}