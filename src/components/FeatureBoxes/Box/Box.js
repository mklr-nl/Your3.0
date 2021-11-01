import React from "react"
import styled from "styled-components"
import Container from "../../ui/Grid/Container"
import Row from "../../ui/Grid/Row"
import Column from "../../ui/Grid/Column"

const BoxStyled = styled(Column)`
  border-radius: 15px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 15px;
  transform: translateY(-200px);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Title = styled.p`
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
`

const Text = styled.p`
  padding: 0 30px 15px 30px;
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
