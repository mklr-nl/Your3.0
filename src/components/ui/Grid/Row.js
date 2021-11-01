import React from "react"
import styled from "styled-components"

const StyledRow = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  flex-wrap: ${props => (props.nowrap ? "no wrap" : "wrap")};
  gap: 10%;
`

const Row = props => {
  return (
    <StyledRow
      nowrap={props.nowrap}
      justify={props.justify}
      className={props.className}
    >
      {props.children}
    </StyledRow>
  )
}
export default Row
