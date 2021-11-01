import React, { Fragment } from "react"
import styled from "styled-components"
import { TextPart } from "./TextPart"
import { LaunchPart } from "./LaunchPart"

import Row from "../ui/Grid/Row"
import Section from "../ui/Grid/Section"
import Container from "../ui/Grid/Container"

const Hero = props => {
  return (
    <Section>
      <Container>
        <Row>
          <TextPart />
          <LaunchPart />
        </Row>
      </Container>
    </Section>
  )
}
export default Hero
