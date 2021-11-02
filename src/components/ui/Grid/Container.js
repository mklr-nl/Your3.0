import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  padding: 15px;
  margin: 0 auto;
  @media only screen and (min-width: 1000px) {
    width: 90%;
  }
  max-width: 1500px;
`

const Container = props => {
  return (
    <StyledContainer className={props.className}>
      {props.children}
    </StyledContainer>
  )
}
export default Container
