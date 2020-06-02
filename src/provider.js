import React, { useState } from 'react'

export const ThemeContext = React.createContext()

const Provider = props => {
    const [isDark, setTheme] = useState(false)

    return (
        <ThemeContext.Provider value={{
            isDark,
            changeTheme: () => setTheme(!isDark)
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
)