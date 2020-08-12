import React from 'react'
import { Context } from './provider'
import StarLayout from '../styles/star-layout'
import { starTheme } from '../styles/theme'


const App = ({ children }) => {
    
    return (
        <Context.Consumer>
            {theme => (
                <>
                    {children.theme === starTheme ? <StarLayout/> : null}
                </>
            )}
        </Context.Consumer>    
    )
}

export default App