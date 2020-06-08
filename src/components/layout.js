import React from 'react'
import { ThemeContext } from '../../provider'
import Nav from './nav'
import Toggle from './toggle'

const Layout = () => {
    
    return (
        <ThemeContext.Consumer>
            <>
                <Nav />
                <Toggle />
                <div>
                    <h1>Hello. React hook demo for burger menu ala mode with Styled-Components and Sass.</h1>
                </div>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </>  
        </ThemeContext.Consumer>
    )
}

export default Layout