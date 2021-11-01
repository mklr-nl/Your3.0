import React from "react"
import styled from "styled-components"
import Container from "../../ui/Grid/Container"
import Row from "../../ui/Grid/Row"
import Column from "../../ui/Grid/Column"

const BoxStyled = styled(Column)`
  border-radius: 15px;
  background-color: white;
  text-align: center;
  margin: 15px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  align-items: center;
`

const Title = styled.p`
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
`

const Text = styled.p`
  width: 300px;
  height: 30px;
  font-family: MADETOMMY;
  font-size: ${props => props.theme.textsize.small};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.43px;
  color: #201648;
  padding-bottom: 20px;
`

const Box = props => {
  return (
    <BoxStyled flex={props.flex}>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </BoxStyled>
  )
}
export default Box
