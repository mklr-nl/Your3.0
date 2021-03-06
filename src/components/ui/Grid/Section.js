import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
  padding-bottom: 150px;
`

const Section = props => {
  return (
    <StyledSection className={props.className}>{props.children}</StyledSection>
  )
}
export default Section
