import React from "react"
import styled from "styled-components"

const StyledColumn = styled.div`
  padding: 15px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1300px) {
    align-items: center;
  }
`

const Column = props => {
  return (
    <StyledColumn className={props.className}>{props.children}</StyledColumn>
  )
}
export default Column
