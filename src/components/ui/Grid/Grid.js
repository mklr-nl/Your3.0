import React, { Fragment } from "react"
import Section from "./Section"
import Container from "./Container"
import Row from "./Row"
import Column from "./Column"

const Grid = props => {
  return (
    <Section margin={props.margin}>
      <Container>
        <Row justify={props.justify}>{props.children}</Row>
      </Container>
    </Section>
  )
}
export default Grid
