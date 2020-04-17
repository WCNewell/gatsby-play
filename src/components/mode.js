import { useEffect, useState } from 'react'

export const useMode = () => {
    const [theme, setTheme] = useState('light')
    const [componentMounted, setComponentMounted] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setMode('light')
        } else if (theme === 'dark') {
            setMode('dark')
        } else {
            setMode('star');
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

    return [theme, toggleTheme, componentMounted]
}