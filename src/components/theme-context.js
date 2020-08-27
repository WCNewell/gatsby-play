import React from 'react'

export const themes = {
    light: {
        text: '#0d0c1d'
    },
    dark: {
        text: '#effffa'
    },
    star: {
        text: '#efc07b'
    }
}

export const ThemeContext = React.createContext(themes.light)