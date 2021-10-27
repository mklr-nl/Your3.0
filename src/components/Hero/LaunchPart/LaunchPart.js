import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components'
import Column from '../../ui/Grid/Column'
import {Grid} from '../../ui/Grid'
import Row from '../../ui/Grid/Row'

const RowTimer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 15px 0;
`
const RowBar = styled.div`
  height: 30px;
  background-color: white;
  margin: 15px 0;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
`

const Filler = styled.div`
  height: 30px;
  background-color: #00ff1e;
  width: 80%;
`

const Title = styled.p`
color: white;
font-size: 50px;
`
const TitleColored = styled.span`
  background: #f24f00;
  font-size: 50px;
  padding: 0 0px 5px 0px;
`

const CounterNumber = styled.p`
  color: white;
font-size: 35px;
margin-bottom: 15px;
`

const CounterText = styled.p`
color: white;
`

const Timer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between ;
align-items: center;
`
const YourStyled = styled.span`
  font-weight: 800;
  font-size: 50px;

`

const LaunchPart = (props) => {  

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')


  let interval = useRef()
  const startTimer = () => {
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0){
        clearInterval()
      } else {
        if(days < 10 ){
          setTimerDays(`0 + ${days}`)
        } else {
          setTimerDays(days)
        }
        if(hours < 10 ){
          setTimerHours(`0${hours}`)
        } else {
          setTimerHours(hours)

        }
        if(minutes < 10 ){
          setTimerMinutes(`0${minutes}`)
        } else {
          setTimerMinutes(minutes)
        }
        if(seconds < 10 ){
          setTimerSeconds(`0${seconds}`)
        } else {
          setTimerSeconds(seconds)
        }
      }
    }, 1000)
  }
  useEffect(() => {
    startTimer();
    return() => {}
  })


  return (
  <Column column>
    <Row><Title><YourStyled>YOUR </YourStyled><TitleColored>public sale launching</TitleColored> in:</Title> </Row>
    <RowTimer>
      <Timer>
        <CounterNumber>{timerDays}</CounterNumber>
        <CounterText>DAYS</CounterText>
      </Timer>
      <Timer>
        <CounterNumber>{timerHours}</CounterNumber>
        <CounterText>HOURS</CounterText>
      </Timer>
      <Timer>
      <CounterNumber>{timerMinutes}</CounterNumber>
        <CounterText>MINUTES</CounterText>
      </Timer>
      <Timer>
        <CounterNumber>{timerSeconds}</CounterNumber>
        <CounterText>SECONDS</CounterText>
      </Timer>
    </RowTimer>
    <RowBar>
      <Filler></Filler>
    </RowBar>
  </Column>
  )
}

export default LaunchPart