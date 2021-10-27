import React, { Fragment } from "react"
import styled from "styled-components"
import { FaFacebook } from "react-icons/fa"
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai"

import Container from "../../ui/Grid/Container"
import Row from "../../ui/Grid/Row"
import Column from "../../ui/Grid/Column"
import ButtonWhite from "../../ui/Buttons/ButtonWhite"

const TextStyled = styled.p`
  color: white;
  font-size: 60px;
  font-weight: 800;
  @media only screen and (min-width: 1900px) {
    max-width: 75%;
  }
`
const SubTextStyled = styled.p`
  font-weight: 100;
  color: white;
  font-size: 24px;
`

const TextPart = props => {
  const icon = {
    width: "50px",
    height: "50px",
    color: "white",
    paddingRight: "15px",
  }
  return (
    <Container>
      <Row>
        <Column>
          <Row>
            <TextStyled>
              the first commision free blockchain driven marketplace
            </TextStyled>
          </Row>
          <Row>
            <SubTextStyled>
              with a decentralized user generated content network
            </SubTextStyled>
          </Row>
          <Row>
            <ButtonWhite>Download whitepaper</ButtonWhite>
            <ButtonWhite>ICO registration</ButtonWhite>
          </Row>
          <Row flex>
            <FaFacebook style={icon} />
            <AiFillGoogleCircle style={icon} />
            <AiFillTwitterCircle style={icon} />
            <AiFillInstagram style={icon} />
          </Row>
        </Column>
      </Row>
    </Container>
  )
}
export default TextPart
