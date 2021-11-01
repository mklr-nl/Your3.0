import * as React from "react"
import Root from "./Root"
import Background from "./Background/Background"
import { Hero } from "./Hero"

import { Header } from "./Header"
import { FeatureBoxes } from "../components/FeatureBoxes"

const Layout = props => {
  return (
    <Root>
      <Background>
        <Header />
        <Hero />
      </Background>
      <FeatureBoxes></FeatureBoxes>
      {props.children}
    </Root>
  )
}

export default Layout
