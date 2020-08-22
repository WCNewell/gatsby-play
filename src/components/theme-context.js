import React from 'react'
import useDarkMode from 'use-dark-mode'
import { lightTheme, darkTheme, starTheme } from '../styles/theme'

const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {
    
    
    return (
        <ThemeContext.Provider
            value={{
                one,
                two,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}



export default ThemeContext

export { ThemeProvider }