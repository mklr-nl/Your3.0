import React from "react"
import styled from "styled-components"

const InnerRowStyled = styled.div`
  padding: ${props => props.theme.gutter.middle} 0;
  display: flex;
  justify-content: ${props => props.justify};
  gap: 5%;
`

const InnerRow = props => {
  return (
    <InnerRowStyled justify={props.justify} className={props.className}>
      {props.children}
    </InnerRowStyled>
  )
}
export default InnerRow
