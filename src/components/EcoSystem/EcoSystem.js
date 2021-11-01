import React from "react"
import styled from "styled-components"
import Container from "../ui/Grid/Container"
import Row from "../ui/Grid/Row"
import Section from "../ui/Grid/Section"
import Column from "../ui/Grid/Column"
import InnerRow from "../ui/Grid/InnerRow"
// import worldImage from "../../assets/your-documents.svg"

const SectionStyled = styled(Section)`
  transform: translateY(-200px);
`

const Image = styled.img``

const SubTitle = styled.p`
  font-family: ProximaNova;
  font-size: 14.3px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 1.34px;
  color: #201648;
`

const Title = styled.p`
  font-family: ProximaNova-Extrabld;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -1px;
  color: #201648;
`
const Text = styled.p`
  font-family: ProximaNova;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.68;
  letter-spacing: normal;
  color: #73737b;
`

const EcoSystem = props => {
  return (
    <SectionStyled>
      <Container>
        <Row>
          <Column flex={2}>{/* <Image src={worldImage}></Image> */}</Column>
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
        </Row>
      </Container>
    </SectionStyled>
  )
}
export default EcoSystem
