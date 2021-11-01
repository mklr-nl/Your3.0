import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { GiTireIronCross } from "react-icons/gi"
import Container from "../ui/Grid/Container"
import Row from "../ui/Grid/Row"
import ButtonOrange from "../ui/Buttons/ButtonOrange"
import { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"
import iconBlack from "../../assets/your-logo-black.svg"
import iconWhite from "../../assets/your-logo-white.svg"

const GlobalStyle = createGlobalStyle`
    body{   
    }
`

const StyledLogo = styled.img`
  height: 50px;
`
const Wrapper = styled.div`
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.backgroundColor};
  box-shadow: ${props => props.shadow};
  transition: ease 0.4s all;
  opacity: 90%;
  max-width: 2000px;
`

const ButtonOrangeStyled = styled(ButtonOrange)`
  @media only screen and (max-width: 400px) {
    display: none;
  }
`

const StyledLink = styled(motion.a)`
  padding: 15px;
  margin: 0 15px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
  cursor: pointer;
  font-weight: 300;
  font-size: ${props => props.theme.textsize.small};
  color: ${props => props.color};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const BurgerIconStyled = styled(GiHamburgerMenu)`
  color: ${props => props.color};
  font-size: 60px;
  cursor: pointer;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`
const CrossIconStyled = styled(GiTireIronCross)`
  color: red;
  font-size: 60px;
  cursor: pointer;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
`

const Header = props => {
  const [showBurger, setShowBurger] = useState(true)

  const clickHandler = () => {
    setShowBurger(prevShowBurger => !prevShowBurger)
  }

  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 25) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener("scroll", changeBackground)
  }, [])

  return (
    <Wrapper
      backgroundColor={navbar ? "white" : "transparent"}
      shadow={navbar && "0 4px 6px -6px #222"}
    >
      <GlobalStyle />
      <Container justify="space-between" marginzero>
        <Row nowrap justify="space-between">
          {navbar ? (
            <StyledLogo src={iconBlack}></StyledLogo>
          ) : (
            <StyledLogo src={iconWhite}></StyledLogo>
          )}
          <RightSide>
            <StyledLink
              whileTap={{ scale: 0.9, transition: 1 }}
              whileHover={{ scale: 1.05, transition: 0.4 }}
              color={navbar ? "black" : "white"}
            >
              vision
            </StyledLink>
            <StyledLink
              whileTap={{ scale: 0.9, transition: 1 }}
              whileHover={{ scale: 1.05, transition: 0.4 }}
              color={navbar ? "black" : "white"}
            >
              technology
            </StyledLink>
            <StyledLink
              whileTap={{ scale: 0.9, transition: 1 }}
              whileHover={{ scale: 1.05, transition: 0.4 }}
              color={navbar ? "black" : "white"}
            >
              partners
            </StyledLink>
            <StyledLink
              whileTap={{ scale: 0.9, transition: 1 }}
              whileHover={{ scale: 1.05, transition: 0.4 }}
              color={navbar ? "black" : "white"}
            >
              tokensale
            </StyledLink>
            <StyledLink
              whileTap={{ scale: 0.9, transition: 1 }}
              whileHover={{ scale: 1.05, transition: 0.4 }}
              color={navbar ? "black" : "white"}
            >
              roadmap
            </StyledLink>
            <StyledLink
              whileTap={{ scale: 0.9, transition: 1 }}
              whileHover={{ scale: 1.05, transition: 0.4 }}
              color={navbar ? "black" : "white"}
            >
              team
            </StyledLink>
            <ButtonOrangeStyled>whitepaper</ButtonOrangeStyled>
            {showBurger ? (
              <BurgerIconStyled
                onClick={clickHandler}
                color={navbar ? "black" : "white"}
              />
            ) : (
              <CrossIconStyled onClick={clickHandler} />
            )}
          </RightSide>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header
