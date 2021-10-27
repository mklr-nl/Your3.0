import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { GiTireIronCross } from "react-icons/gi"
import Container from "../ui/Grid/Container"
import ButtonOrange from "../ui/Buttons/ButtonOrange"

const Icon = styled.p`
  padding: 0 15px;
  color: white;
  font-size: 40px;
  font-weight: bold;
`

const ButtonOrangeStyled = styled(ButtonOrange)``

const ColumnLinks = styled.div`
  padding: 0 15px;
  margin: 0 15px;
  pointer-events: none;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`
const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 1rem;
  color: white;
  pointer-events: none;
`

const ColumnMenuIcon = styled.div`
  z-index: 2000;
  padding-left: 30px;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`

const BurgerIconStyled = styled(GiHamburgerMenu)`
  color: white;
  font-size: 60px;
  cursor: pointer;
`
const CrossIconStyled = styled(GiTireIronCross)`
  color: red;
  font-size: 60px;
  cursor: pointer;
`

const Header = props => {
  const [showBurger, setShowBurger] = useState(true)

  const clickHandler = () => {
    setShowBurger(prevShowBurger => !prevShowBurger)
    console.log("clicked")
  }
  return (
    <Container justify="space-between" marginzero>
      <Icon>YOUR</Icon>
      <Container marginzero>
        <ColumnLinks>
          <StyledSpan>vision</StyledSpan>
        </ColumnLinks>
        <ColumnLinks>
          <StyledSpan>technology</StyledSpan>
        </ColumnLinks>
        <ColumnLinks>
          <StyledSpan>partners</StyledSpan>
        </ColumnLinks>
        <ColumnLinks>
          <StyledSpan>tokensale</StyledSpan>
        </ColumnLinks>
        <ColumnLinks>
          <StyledSpan>roadmap</StyledSpan>
        </ColumnLinks>
        <ColumnLinks>
          <StyledSpan>team</StyledSpan>
        </ColumnLinks>
        <ButtonOrangeStyled>whitepaper</ButtonOrangeStyled>
        <ColumnMenuIcon onClick={clickHandler}>
          {showBurger ? <BurgerIconStyled /> : <CrossIconStyled />}
        </ColumnMenuIcon>
      </Container>
    </Container>
  )
}

export default Header
