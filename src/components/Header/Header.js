import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Grid } from "../ui/Grid"
import Column from "../ui/Grid/Column"
import Row from "../ui/Grid/Row"
import { GiHamburgerMenu } from "react-icons/gi"
import { GiTireIronCross } from "react-icons/gi"

const ColumnLinks = styled.div`
  padding: 0 15px;
  pointer-events: none;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`
const ColumnMenuIcon = styled.div`
  z-index: 2000;
  @media only screen and (min-width: 850px) {
    display: none;
  }
`

const BurgerIconStyled = styled(GiHamburgerMenu)`
  color: white;
  font-size: 50px;
  cursor: pointer;
`
const CrossIconStyled = styled(GiTireIronCross)`
  color: red;
  font-size: 50px;
  cursor: pointer;
`

const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 2.4rem;
  color: white;
  pointer-events: none;
`
const YourStyled = styled.span`
  font-weight: 800;
  font-size: 1.8rem;
  color: white;
  pointer-events: none;

`

const Header = props => {
  const [showBurger, setShowBurger] = useState(true)

  const clickHandler = () => {
    setShowBurger(prevShowBurger => !prevShowBurger)
    console.log("clicked")
  }
  return (
    <Grid display="none" justify='end'>
        <Column>
          <ColumnLinks>
            <YourStyled>YOUR</YourStyled>
            <StyledSpan>content</StyledSpan>
          </ColumnLinks>
          <ColumnLinks>
            <YourStyled>YOUR</YourStyled>
            <StyledSpan>buy</StyledSpan>
          </ColumnLinks>
          <ColumnLinks>
            <YourStyled>YOUR</YourStyled>
            <StyledSpan>token</StyledSpan>
          </ColumnLinks>
          <ColumnLinks>
            <YourStyled>YOUR</YourStyled>
            <StyledSpan>wallet</StyledSpan>
          </ColumnLinks>
        <ColumnMenuIcon onClick={clickHandler}>
          {showBurger ? <BurgerIconStyled /> : <CrossIconStyled />}
        </ColumnMenuIcon>
        </Column>
    </Grid>
  )
}

export default Header
