import React, { Fragment } from "react"
import styled from "styled-components"
import { FaFacebook } from "react-icons/fa"
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai"

import Column from "../../ui/Grid/Column"
import InnerRow from "../../ui/Grid/InnerRow"
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
    cursor: "pointer",
  }
  return (
    <Column minWidth="400px" flex={3}>
      <InnerRow>
        <TitleStyled>
          the first commision free blockchain driven marketplace
        </TitleStyled>
      </InnerRow>
      <InnerRow>
        <SubTextStyled>
          with a decentralized user generated content network
        </SubTextStyled>
      </InnerRow>
      <InnerRow>
        <ButtonWhite>Download whitepaper</ButtonWhite>
        <ButtonWhite>ICO registration</ButtonWhite>
      </InnerRow>
      <InnerRow>
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
      </InnerRow>
    </Column>
  )
}
export default TextPart
