import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *:before, *:after {
        box-sizing: border-box;
    }
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body {
        line-height: 1.5;
        letter-spacing: 0;
    }
`