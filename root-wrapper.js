import React from 'react'
import { Provider } from './src/components/star-mode'

export const wrapRootElement = ({ element }) => (
    <>
        <Provider>{element}</Provider>
    </>
)