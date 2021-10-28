import * as React from "react"
import styled from "styled-components"

import Root from "./Root"
import Background from "../components/Background/Background"
import { Hero } from "../components/Hero"

import { Header } from "./Header"

const Layout = props => {
  return (
    <Root>
      <Background>
        <Header />
        <Hero />
      </Background>
      {props.children}
    </Root>
  )
}

export default Layout
