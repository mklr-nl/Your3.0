import React, { Fragment } from "react"
import styled from "styled-components"
import { TextPart } from "./TextPart"
import { LaunchPart } from "./LaunchPart"


const Hero = props => {
  return (
    <div>
      <TextPart />
      <LaunchPart />
    </div>
  )
}
export default Hero
