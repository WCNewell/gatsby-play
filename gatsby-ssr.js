import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './src/styles/global-style'
import Theme from './src/themes/theme'

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>
)

