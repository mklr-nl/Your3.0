import * as React from "react"
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

import {Header} from './Header'
import {Hero} from './Hero'
import {Background} from './Background'

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

const LayoutStyled = styled.div`
    /* width: 90%;
  margin: 0 auto; */
`

const Layout = (props) => {
  return (
    <>
      <LayoutStyled>
      <GlobalStyle/>     
      <Background>
        <Header />
        <Hero/>
      </Background> 
      </LayoutStyled>
      </>
  )
}


export default Layout
