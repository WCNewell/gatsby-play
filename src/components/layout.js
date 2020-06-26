import React from 'react'
import Toggle from './toggle'
import Nav from './nav'

const Layout = () => {
    
    return (
        
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
       
    )
}

export default Layout