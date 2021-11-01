import React from "react"
import styled from "styled-components"
import { Section, Container, Row, Column, InnerRow } from "../ui/Grid"
import MarketPlace from "../../../assets/your-buy-marketplace.svg"

const SectionStyled = styled(Section)`
  padding-top: 150px;
`

const SubTitle = styled.p`
  font-family: ProximaNova;
  font-size: 14.3px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 1.34px;
  color: #fff;
`

const Title = styled.p`
  font-family: ProximaNova-Extrabld;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -1px;
  color: #fff;
`
const Text = styled.p`
  font-family: ProximaNova;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.68;
  letter-spacing: normal;
  color: #fff; ;
`
const ContentNetwork = props => {
  return (
    <SectionStyled>
      <Container>
        <Row>
          <Column flex={2}>
            <InnerRow>
              <SubTitle>OUR ECOSYSTEM</SubTitle>
            </InnerRow>
            <InnerRow>
              <Title>
                Join us to disrupt the product NFT & e-commerce economy
              </Title>
            </InnerRow>
            <InnerRow>
              <Text>
                YOUR is building a Peer to Peer marketplace for physical and
                digital assets. An e-commerce environment to enable people to
                sell and create physical and digital assets. <br />
                <br />
                YourContent will facilitate the creation, curation and bundling
                of Product NFT’s. These NFT’s will generate earnings on the
                moment of creation and future. The future earnings are fueled by
                the physical and digital asset Marketplace.
              </Text>
            </InnerRow>
          </Column>
          <Column flex={2}>
            <MarketPlace />
          </Column>
        </Row>
      </Container>
    </SectionStyled>
  )
}
export default ContentNetwork
