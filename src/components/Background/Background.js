import React, { Fragment } from "react";
import styled from 'styled-components';
import img from '../../assets/connected-dots.png'
import ParticalsUnit from './ParticalsUnit'


const StyledImg = styled.img`
  transform: translate(500px, 100px);
  width: 80%;
  position: absolute;
  right:0;
  bottom: 0;
  @media only screen and (max-width: 1024px){
    display: none;
  }
`

const BackgroundStyled = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
position: absolute;
  background: rgb(11, 108, 80);
  background: -moz-linear-gradient(
    172deg,
    rgba(11, 108, 80, 1) 0%,
    rgba(0, 26, 20, 1) 100%
  );
  background: -webkit-linear-gradient(
    172deg,
    rgba(11, 108, 80, 1) 0%,
    rgba(0, 26, 20, 1) 100%
  );
  background: linear-gradient(
    172deg,
    rgba(11, 108, 80, 1) 0%,
    rgba(0, 26, 20, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0b6c50",endColorstr="#001a14",GradientType=1);

`

const Background = (props) => {
  
  return (
  <BackgroundStyled>
    {props.children}
    <ParticalsUnit/>

  </BackgroundStyled>
  )
}
export default Background