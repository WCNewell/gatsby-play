import { useEffect, useState } from 'react'

export const Mode = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            window.localStorage.setItem('theme', 'dark')
            setTheme('dark')
        } else if (theme === 'dark') {
            window.localStorage.setItem('theme', 'light')
            setTheme('light')
        } else {
            window.localStorage.setItem('theme', 'star')
            setTheme('star')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme && setTheme(localTheme)
    }, [])

    return [theme, toggleTheme]
}