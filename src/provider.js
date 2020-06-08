import React, { useState } from 'react'

export const ThemeContext = React.createContext()

const Provider = props => {
    const [isLight, setTheme] = useState(false)

    return (
        <ThemeContext.Provider value={{
            isLight,
            changeTheme: () => setTheme(!isLight)
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