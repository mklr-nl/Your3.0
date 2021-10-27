import React, { Fragment } from "react"
import styled from "styled-components"
import { TextPart } from "./TextPart"
import { LaunchPart } from "./LaunchPart"
import {Grid} from '../ui/Grid'


const Hero = props => {
  return (
    <Grid margin='100px' justify='space-between'>
      <TextPart />
      <LaunchPart />
    </Grid>
  )
}
export default Hero
