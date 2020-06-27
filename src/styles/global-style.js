import { createGlobalStyle } from 'styled-components'
import { reset } from 'syled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }
    *, *:before, *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: inherit;
    }
    body {
        line-height: 1.5;
        letter-spacing: 0;
    }
    
`