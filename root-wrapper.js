import React from 'react'
import App from './src/components/app'
import { GlobalStyles } from './src/styles/global'

export const wrapRootElement = ({ element }) => (
    <>
        <GlobalStyles />
        <App>{element}</App>
    </>
)