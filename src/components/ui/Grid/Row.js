import React from "react"
import styled from "styled-components"

const StyledRow = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: ${props => props.justify};
  @media only screen and (max-width: 1300px) {
    flex-direction: ${props => props.direction};
    align-items: center;
    text-align: center;
  }
`

const Row = props => {
  return (
    <StyledRow
      justify={props.justify}
      className={props.className}
      direction={props.direction}
    >
      {props.children}
    </StyledRow>
  )
}
export default Row
