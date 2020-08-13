import React from 'react'
// import { lightTheme, starTheme } from '../styles/theme'


export const StarContext = React.createContext()

export const Provider = ({ children }) => {

    return (
        <StarContext.Provider value='theme'>
            {children}
        </StarContext.Provider>
    )
}