import { useEffect, useState } from 'react'
import { lightTheme } from '../theme'

export const useLightMode = () => {
    const [theme, setTheme] = useState('light')
    
    const [componentMounted, setComponentMounted] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleLightTheme = () => {
        if (theme === 'dark' || 'star') {
            setMode(lightTheme)
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