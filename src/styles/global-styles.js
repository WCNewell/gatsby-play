import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    html {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        overflow: scroll;
        scroll-behavior: smooth;
        
    }

    *, *:before, *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: inherit;
    }

    body {
        display: flex;
        font-family: Limelight, sans-serif;
        line-height: 1.5;
        letter-spacing: 0;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        height: 100%;
        transition: all 0.25s linear;
    }    
`