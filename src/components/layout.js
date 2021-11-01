import * as React from "react"
import Root from "./Root"
import Background from "./Background/Background"
import { Hero } from "./Hero"

import { Header } from "./Header"
import { FeatureBoxes } from "../components/FeatureBoxes"
import { EcoSystem } from "./EcoSystem"
import { ContentNetwork } from "./ContentNetwork"

const Layout = props => {
  return (
    <Root>
      <Background>
        <Header />
        <Hero />
      </Background>
      <FeatureBoxes />
      <EcoSystem />
      <Background>
        <ContentNetwork />
      </Background>

      {props.children}
    </Root>
  )
}

export default Layout
