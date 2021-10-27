import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import Container from "../../ui/Grid/Container"
import Row from "../../ui/Grid/Row"
import Column from "../../ui/Grid/Column"
import ButtonWhite from "../../ui/Buttons/ButtonWhite"

const StyledColumn = styled.div`
  &:not(:last-child) {
    margin-right: 90px;
  }
`

const RowBar = styled.div`
  display: flex;
  min-width: 100%;
  align-items: center;
  height: 35px;
  background-color: white;
  margin: 15px 0;
  border-radius: 15px;
  margin: 30px 0;
`

const Filler = styled.div`
  margin-left: 2px;
  height: 30px;
  background-color: #0a7c5c;
  width: 80%;
  border-radius: 15px;
`

const Title = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-align: center;
`

const CounterNumber = styled.p`
  color: white;
  font-size: 50px;
  margin-bottom: 15px;
`

const CounterText = styled.p`
  color: white;
`

const LaunchPart = props => {
  const [timerDays, setTimerDays] = useState("00")
  const [timerHours, setTimerHours] = useState("00")
  const [timerMinutes, setTimerMinutes] = useState("00")
  const [timerSeconds, setTimerSeconds] = useState("00")

  let interval = useRef()
  const startTimer = () => {
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime()
    interval = setInterval(() => {
      let now = new Date().getTime()
      let distance = countDownDate - now
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if (distance < 0) {
        clearInterval()
      } else {
        if (days < 10) {
          setTimerDays(`0 + ${days}`)
        } else {
          setTimerDays(days)
        }
        if (hours < 10) {
          setTimerHours(`0${hours}`)
        } else {
          setTimerHours(hours)
        }
        if (minutes < 10) {
          setTimerMinutes(`0${minutes}`)
        } else {
          setTimerMinutes(minutes)
        }
        if (seconds < 10) {
          setTimerSeconds(`0${seconds}`)
        } else {
          setTimerSeconds(seconds)
        }
      }
    }, 1000)
  }
  useEffect(() => {
    startTimer()
    return () => {}
  })

  return (
    <Container>
      <Row>
        <Column>
          <Row>
            <Title>ICO WILL START IN</Title>
          </Row>
          <Row>
            <StyledColumn>
              <CounterNumber>{timerDays}</CounterNumber>
              <CounterText>DAYS</CounterText>
            </StyledColumn>
            <StyledColumn>
              <CounterNumber>{timerHours}</CounterNumber>
              <CounterText>HOURS</CounterText>
            </StyledColumn>
            <StyledColumn>
              <CounterNumber>{timerMinutes}</CounterNumber>
              <CounterText>MINUTES</CounterText>
            </StyledColumn>
            <StyledColumn>
              <CounterNumber>{timerSeconds}</CounterNumber>
              <CounterText>SECONDS</CounterText>
            </StyledColumn>
          </Row>
          <RowBar>
            <Filler></Filler>
          </RowBar>
          <Row justify="center">
            <ButtonWhite>register & buy tokens now</ButtonWhite>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export default LaunchPart
