import { useEffect, useState } from 'react'

export const useMode = () => {
    const [theme, setTheme] = useState('light')
    const [componentMounted, setComponentMounted] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

<<<<<<< Updated upstream
    const toggleTheme = () => {
        if (theme === 'light') {
            setMode('light')
        } else if (theme === 'dark') {
            setMode('dark')
        } else {
            setMode('star');
=======
    const toggleLightTheme = () => {
        if (theme === 'dark' || 'star') {
            return setMode('light')
        }
    }
    
    const toggleDarkTheme = () => {
        if (theme === 'light' || 'star') {
            return setMode('dark')
        }
    }

    const toggleStarTheme = () => {
        if (theme === 'light' || 'dark') {
            return setMode('star')
>>>>>>> Stashed changes
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

    return [theme, toggleLightTheme, toggleDarkTheme, toggleStarTheme, componentMounted]
}