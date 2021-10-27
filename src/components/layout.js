import * as React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import { Header } from "./Header"
import { Hero } from "./Hero"
import { Background } from "./Background"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    box-sizing: border-box;
    font-family: 'proxima-nova', sans-serif;
    font-size: 16px;
  }
 `

const LayoutStyled = styled.div``
const Root = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  @media only screen and (min-width: 1500px) {
    width: 90%;
  }
`

const Layout = props => {
  return (
    <LayoutStyled>
      <GlobalStyle />
      <Background>
        <Root>
          <Header />
          <Hero />
        </Root>
      </Background>
    </LayoutStyled>
  )
}

export default Layout
