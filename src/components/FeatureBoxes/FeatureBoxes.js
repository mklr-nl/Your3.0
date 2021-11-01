import React from "react"
import styled from "styled-components"
import Box from "./Box/Box"
import Container from "../ui/Grid/Container"
import Row from "../ui/Grid/Row"
import Section from "../ui/Grid/Section"

const FeatureBoxes = props => {
  const titles = ["Yourcontent", "Yourcontent", "Yourcontent"]
  return (
    <Section>
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
    </Section>
  )
}
export default FeatureBoxes
