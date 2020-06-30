import { useEffect, useState } from 'react'

export const useStarMode = () => {
    const [theme, setTheme] = useState('light')

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('dark')
        //^^Ugh! always with the ternary, how to solve this??
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme && setTheme(localTheme)
    }, [])
    return [theme, themeToggler]
}

