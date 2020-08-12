import React from 'react'
import Header from './header'
import Footer from './footer'

import '../styles/styles.scss'

const App = ({ children }) => {

    return (
        <>
           
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
           
        </> 
    )
}

export default App


