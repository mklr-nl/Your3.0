import React from "react"
import styled from "styled-components"
import Box from "./Box/Box"
import { Section, Container, Row } from "../ui/Grid"

const SectionStyled = styled(Section)`
  transform: translateY(-110px);
`

const FeatureBoxes = props => {
  const titles = ["Yourcontent", "Yourcontent", "Yourcontent"]
  return (
    <SectionStyled>
      <Container>
        <Row>
          <Box
            flex={3}
            text="We use of the newest NFT 2.0 technology for co-ownership"
            title="Yourcontent"
          />
          <Box
            flex={3}
            text="We use of the newest NFT 2.0 technology for co-ownership"
            title="Yourcontent"
          />
          <Box
            flex={3}
            text="We use of the newest NFT 2.0 technology for co-ownership"
            title="Yourcontent"
          />
        </Row>
      </Container>
    </SectionStyled>
  )
}
export default FeatureBoxes
