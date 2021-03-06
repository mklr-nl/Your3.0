import React from "react"
import styled from "styled-components"

const StyledColumn = styled.div`
  display: flex;
  flex: ${props => props.flex};
  flex-direction: column;
  flex-basis: 350px;
  padding: 15px 0;
`

const Column = props => {
  return (
    <StyledColumn
      minWidth={props.minWidth}
      flex={props.flex}
      className={props.className}
      direction={props.direction}
    >
      {props.children}
    </StyledColumn>
  )
}
export default Column
