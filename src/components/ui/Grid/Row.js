import React, { Fragment } from "react";
import styled from 'styled-components'

const RowStyled = styled.div`
display: flex;
align-items: center;
justify-content: ${props => props.justify};
margin: 15px 0;
`

const Row = (props) => {
  
  return (
  <RowStyled className ='row' justify={props.justify}>
     {props.children}
  </RowStyled>
  )
}
export default Row