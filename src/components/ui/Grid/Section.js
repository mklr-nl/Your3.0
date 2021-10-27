import React, { Fragment } from "react";
import styled from 'styled-components'

const SectionStyled = styled.div`
  margin: ${props => props.margin} 0;
`

const Section = (props) => {
  
  return (
  <SectionStyled margin={props.margin} className ='section'>
    {props.children}    
  </SectionStyled>
  )
}
export default Section