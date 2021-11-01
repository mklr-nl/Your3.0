import * as React from "react"
import Root from "./Root"
import Background from "./Background/Background"
import { Hero } from "./Hero"

import { Header } from "./Header"
import { FeatureBoxes } from "../components/FeatureBoxes"
import { EcoSystem } from "./EcoSystem"

const Layout = props => {
  return (
    <Root>
      <Background>
        <Header />
        <Hero />
      </Background>
      <FeatureBoxes />
      <EcoSystem />
      {props.children}
    </Root>
  )
}

export default Layout
