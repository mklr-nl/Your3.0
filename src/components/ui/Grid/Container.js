import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify};
  padding: 15px 0;
  margin: ${props => (props.marginzero ? props.marginzero : "30px")} 0;
  @media only screen and (min-width: 1500px) {
    width: 90%;
  }
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
