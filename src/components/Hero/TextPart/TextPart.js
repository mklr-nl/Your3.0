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

const TitleStyled = styled.p`
  color: white;
  font-size: ${props => props.theme.textsize.xlarge};
  font-weight: 800;
  @media only screen and (min-width: 1900px) {
    max-width: 75%;
  }
`
const SubTextStyled = styled.p`
  font-weight: 100;
  color: white;
  font-size: ${props => props.theme.textsize.middle};
`

const TextPart = props => {
  const icon = {
    width: "50px",
    height: "50px",
    color: "white",
    paddingRight: "15px",
    cursor: "pointer",
  }
  return (
    <Column minWidth="400px" flex={3}>
      <Row>
        <TitleStyled>
          the first commision free blockchain driven marketplace
        </TitleStyled>
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
        <a href="https://nl-nl.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook style={icon} />
        </a>
        <a href="https://nl-nl.facebook.com/" target="_blank" rel="noreferrer">
          <AiFillGoogleCircle style={icon} />
        </a>
        <a href="https://nl-nl.facebook.com/" target="_blank" rel="noreferrer">
          <AiFillTwitterCircle style={icon} />
        </a>
        <a href="https://nl-nl.facebook.com/" target="_blank" rel="noreferrer">
          <AiFillInstagram style={icon} />
        </a>
      </Row>
    </Column>
  )
}
export default TextPart
