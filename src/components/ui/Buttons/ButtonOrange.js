import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const ButtonStyled = styled(motion.button)`
  background-color: #ff4808;
  color: white;
  border-radius: 30px;
  -webkit-tap-highlight-color: transparent;
  font-size: ${props => props.theme.textsize.small};
  font-weight: 800;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 15px 25px 15px 25px;
`

const ButtonOrange = props => {
  return (
    <ButtonStyled
      className={props.className}
      onClick={props.onClick}
      whileTap={{ scale: 0.9, transition: 1 }}
      whileHover={{ scale: 1.05, transition: 0.4 }}
    >
      {props.children}
    </ButtonStyled>
  )
}
export default ButtonOrange
