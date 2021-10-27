import React, { Fragment } from "react";
import styled from 'styled-components'
import { motion } from "framer-motion"
import { FaFacebook } from "react-icons/fa"
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai"
import Column from '../../ui/Grid/Column'
import {Grid} from '../../ui/Grid'
import Row from '../../ui/Grid/Row'

const MainTitle = styled.h1`

  font-weight: 800;
  font-size: 80px;
  color: white;
`

const TextStyled = styled.p`
  color: white;
  font-size: 50px;
  font-weight: 800;
`
const SubTextStyled = styled.p`
  font-weight: 100;
  color: white;
  font-size: 18px;
`


const Button = styled(motion.button)`
  background-color: #f24f00;
  color: white;
  border-radius: 20px;
  font-weight: 800;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 15px 25px 15px 25px;
  &:nth-child(2) {
    margin-left: 15px;
  }
`
const TextPart = (props) => {
  const icon = {
    width: "50px",
    height: "50px",
    color: "white",
    paddingRight: "15px",
  }
  return (
    <Column column maxwidth='50%'>
    <Row>
      <MainTitle>YOUR</MainTitle>
    </Row>
    <Row>
      <TextStyled>
        join us to disrupt the content and e-commerce economy
      </TextStyled>
    </Row>
    <Row>
      <SubTextStyled>
      Decentralized NFT user generated content network and blockchain driven commission free marketplace
      </SubTextStyled>
    </Row>
    <Row>
      <Button
        whileTap={{ scale: 0.9, transition: 0.4 }}
        whileHover={{ scale: 1.1, transition: 0.4 }}
      >
        Download whitepaper
      </Button>
    </Row>
    <Row  flex>
      <FaFacebook style={icon} />
      <AiFillGoogleCircle style={icon} />
      <AiFillTwitterCircle style={icon} />
      <AiFillInstagram style={icon} />
    </Row>
  </Column>
  )
}
export default TextPart