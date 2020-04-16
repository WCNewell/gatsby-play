import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Mode } from './mode'
import { GlobalStyles } from './global'
import { lightTheme, darkTheme, starTheme } from './theme'
import Header from './header'

const App = () => {
    const [theme, toggleTheme] = Mode()
    const themeMode = (theme) => {
        if (theme === 'light') {
            return lightTheme       
        } else if (theme === 'dark') {
            return darkTheme
        } else {
            return starTheme
        }
    }

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <Mode theme={theme} toggleTheme={toggleTheme} />
                <Header />
                <div>
                    <h1>Hello. React hook demo for burger menu ala mode</h1>
                </div>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                    <h5>Icons from iconfinder.com</h5>
                </footer>
            </>  
        </ThemeProvider>
    )
}

export default App

//  const isLight = theme === lightTheme
//     const isDark = theme === darkTheme
//     const isStar = theme === starTheme
//     const themeMode = ({ isLight, isDark }) => (
//         (!isLight)
//             ? isStar
//             : (isDark)
//             ? isLight
//             : isDark
//     )
