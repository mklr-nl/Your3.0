import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { GiTireIronCross } from "react-icons/gi"
import Container from "../ui/Grid/Container"
import ButtonOrange from "../ui/Buttons/ButtonOrange"
import { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

const GlobalStyle = createGlobalStyle`
    body{   
    }
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
  margin: 0 auto;
  @media only screen and (min-width: 1500px) {
    width: 90%;
  }
`

const Icon = styled.p`
  padding: 0 15px;
  color: ${props => props.color};
  font-size: 40px;
  font-weight: bold;
`

const ButtonOrangeStyled = styled(ButtonOrange)``

const StyledLink = styled(motion.a)`
  padding: 15px;
  margin: 0 15px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
  cursor: pointer;
  font-weight: 300;
  font-size: 1rem;
  color: ${props => props.color};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const ColumnMenuIcon = styled.div`
  z-index: 2000;
  padding-left: 30px;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`

const BurgerIconStyled = styled(GiHamburgerMenu)`
  color: ${props => props.color};
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
        <Icon color={navbar ? "black" : "white"}>YOUR</Icon>
        <Container marginzero>
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
          <ColumnMenuIcon onClick={clickHandler}>
            {showBurger ? (
              <BurgerIconStyled color={navbar ? "black" : "white"} />
            ) : (
              <CrossIconStyled />
            )}
          </ColumnMenuIcon>
        </Container>
      </Container>
    </Wrapper>
  )
}

export default Header
