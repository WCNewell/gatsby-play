import React from 'react'
import { starTheme } from '../styles/theme'

const StarContext = React.createContext()

const StarProvider = (props) => {
    return (
        <StarContext.Provider value={starTheme}>
            {props.children}
        </StarContext.Provider>
    )
}

export { StarContext, StarProvider }
