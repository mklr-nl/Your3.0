import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  padding: 15px;
  margin: 0 auto;
  @media only screen and (min-width: 1500px) {
    width: 90%;
  }
  max-width: 1800px;
`

const Container = props => {
  return (
    <StyledContainer
      className={props.className}
      justify={props.justify}
      marginzero={props.marginzero}
    >
      {props.children}
    </StyledContainer>
  )
}
export default Container
