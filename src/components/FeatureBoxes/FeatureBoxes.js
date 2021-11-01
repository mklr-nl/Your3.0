import React from "react"
import styled from "styled-components"
import Box from "./Box/Box"
import Container from "../ui/Grid/Container"
import Row from "../ui/Grid/Row"
import Column from "../ui/Grid/Column"
import Section from "../ui/Grid/Section"

const ContainerStyled = styled(Container)`
  flex-wrap: wrap;
`

const FeatureBoxes = props => {
  const titles = ["Yourcontent", "Yourcontent", "Yourcontent"]
  return (
    <Section>
      <ContainerStyled>
        <Row>
          <Box
            flex={2}
            text="We use of the newest NFT 2.0 technology for co-ownership"
            title="Yourcontent"
          />
          <Box
            flex={2}
            text="We use of the newest NFT 2.0 technology for co-ownership"
            title="Yourcontent"
          />
          <Box
            flex={2}
            text="We use of the newest NFT 2.0 technology for co-ownership"
            title="Yourcontent"
          />
        </Row>
      </ContainerStyled>
    </Section>
  )
}
export default FeatureBoxes
