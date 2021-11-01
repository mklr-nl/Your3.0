import React from "react"
import styled from "styled-components"

const StyledRow = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
  flex-wrap: wrap;
  gap: 5%;
`

const Row = props => {
  return (
    <StyledRow justify={props.justify} className={props.className}>
      {props.children}
    </StyledRow>
  )
}
export default Row
