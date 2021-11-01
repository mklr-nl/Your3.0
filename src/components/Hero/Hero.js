import React, { Fragment } from "react"
import styled from "styled-components"
import { TextPart } from "./TextPart"
import { LaunchPart } from "./LaunchPart"

import { Section, Container, Row } from "../ui/Grid"

const SectionStyled = styled(Section)`
  padding-top: 150px;
`

const Hero = props => {
  return (
    <SectionStyled>
      <Container>
        <Row>
          <TextPart />
          <LaunchPart />
        </Row>
      </Container>
    </SectionStyled>
  )
}
export default Hero
