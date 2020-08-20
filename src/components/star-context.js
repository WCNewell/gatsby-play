import React from 'react'
import StarLayout from '../styles/star-layout'
import { starTheme } from '../styles/theme'

const StarContext = React.createContext(<StarLayout />)

const StarProvider = (props) => {
    return (
        <StarContext.Provider value={starTheme}>
            {props.children}
        </StarContext.Provider>
    )
}

export { StarContext, StarProvider }
