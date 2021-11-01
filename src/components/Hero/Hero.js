import React, { Fragment } from "react"
import styled from "styled-components"
import { TextPart } from "./TextPart"
import { LaunchPart } from "./LaunchPart"

import Row from "../ui/Grid/Row"
import Section from "../ui/Grid/Section"

const StyledRow = styled(Row)`
  padding-bottom: 90px;
`

const Hero = props => {
  return (
    <Section>
      <StyledRow>
        <TextPart />
        <LaunchPart />
      </StyledRow>
    </Section>
  )
}
export default Hero
