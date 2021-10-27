import React, { Fragment } from "react";
import styled from 'styled-components'

const ContainerStyled = styled.div`
    max-width: 2000px;
    margin: 0 auto;
    @media only screen and (min-width: 1500px){
        width: 90%;
    }
    @media only screen and (min-width: 1000px){
        width: 95%;
    }
    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const Container = (props) => {
  
  return (
    <ContainerStyled className ='container'>
        {props.children}    
  </ContainerStyled>
  )
}
export default Container