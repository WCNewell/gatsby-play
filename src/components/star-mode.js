import React, {useState }from 'react'

export const StarContext = React.createContext()

export const Provider = ({ children }) => {
    const [theme, setTheme] = useState()

    return (
        <StarContext.Provider
            value={{
                name: theme,
                updateTheme: setTheme,
            }}>
            {children}
        </StarContext.Provider>
    )
}