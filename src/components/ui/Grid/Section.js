import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  @media only screen and (min-width: 1500px) {
    width: 90%;
  }
  @media only screen and (min-width: 1300px) {
    padding: 100px 0;
  }
`

const Section = props => {
  return (
    <StyledSection className={props.className}>{props.children}</StyledSection>
  )
}
export default Section
