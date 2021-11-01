import React from "react"
import styled from "styled-components"

const StyledRow = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${props => props.justify};
`

const Row = props => {
  return (
    <StyledRow justify={props.justify} className={props.className}>
      {props.children}
    </StyledRow>
  )
}
export default Row
