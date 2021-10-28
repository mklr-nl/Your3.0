import React, { Fragment } from "react"
import styled from "styled-components"

const BackgroundStyled = styled.div`
  z-index: -10000;
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

const Background = props => {
  return <BackgroundStyled>{props.children}</BackgroundStyled>
}
export default Background
