import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './src/styles/global-style'
import Theme from './src/themes/theme'
import Layout from './src/components/layout'

export const wrapRootElement = ({ element }) => (
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        <Layout>
            {element}
        </Layout>
    </ThemeProvider>
)