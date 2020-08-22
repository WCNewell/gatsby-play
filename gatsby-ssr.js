import React from 'react'
import { ThemeProvider } from './src/components/theme-context'

export const wrapPageElement = ({ element }) => (
    <ThemeProvider>{element}</ThemeProvider>
)