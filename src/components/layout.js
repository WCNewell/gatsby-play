import React from 'react'
import { ThemeContext } from '../../provider'
import Toggle from './toggle'
import Nav from './nav'

const Layout = () => {
    
    return (
        <ThemeContext.Consumer>
            <>
                <header>
                    <Toggle />
                    <Nav />
                </header>
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