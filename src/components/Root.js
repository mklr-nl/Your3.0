import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./ui/theme"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    box-sizing: border-box;
    font-family: 'proxima-nova', sans-serif;
    font-size: 16px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  html {
    scroll-behavior: smooth;
  }
`

const Root = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}

export default Root
