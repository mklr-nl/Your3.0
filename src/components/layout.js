import * as React from "react"
import Root from "./Root"
import Background from "./Background/Background"
import { Hero } from "./Hero"

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
