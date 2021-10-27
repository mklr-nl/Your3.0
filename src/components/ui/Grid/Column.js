import React from "react";
import styled from 'styled-components'

const StyledColumn = styled.div`
padding: 15px;
max-width: ${props => props.maxwidth}; 
display: flex;
flex-direction: ${props => props.column  && 'column'};
@media only screen and (min-width: 1500px){
justify-content: ${props => props.justify && props.justify};
}
`


const Column = (props) => {
  
  return (
  <StyledColumn justify={props.justify} column={props.column} maxwidth={props.maxwidth} >
    {props.children}
  </StyledColumn>
  )
}
export default Column