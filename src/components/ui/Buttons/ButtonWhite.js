import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const ButtonStyled = styled(motion.button)`
  background-color: white;
  color: black;
  border-radius: 30px;
  -webkit-tap-highlight-color: transparent;
  font-size: 18px;
  font-weight: 800;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 20px 30px 20px 30px;
  &:nth-child(2) {
    margin-left: 45px;
  }
`

const ButtonWhite = props => {
  return (
    <ButtonStyled
      className={props.className}
      onClick={props.onClick}
      whileTap={{ scale: 0.9, transition: 0.4 }}
      whileHover={{ scale: 1.1, transition: 0.4 }}
    >
      {props.children}
    </ButtonStyled>
  )
}
export default ButtonWhite
