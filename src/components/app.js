import React from 'react'
import ThemeContext from './theme-context'
import StarLayout from './star-layout'
import Header from './header'
import Footer from './footer'
import '../styles/styles.scss'


const App = ({ children }) => {
  
    return (
        <ThemeContext.Consumer>
            {theme => (
                <>
                    {theme === starTheme? <StarLayout /> : null}
                    <Header />
                        <main>
                            {children}
                        </main>
                    <Footer />
                </>
            )}            
        </ThemeContext.Consumer>
    )
}

export default App

