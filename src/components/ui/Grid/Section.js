import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
  @media only screen and (min-width: 1300px) {
    margin: 100px 0;
  }
`

const Section = props => {
  return (
    <StyledSection className={props.className}>{props.children}</StyledSection>
  )
}
export default Section
