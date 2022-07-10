import React, { useEffect, useState } from 'react';
import { Question } from "../Question";
import {TriviaContainer, TriviaTitle,  XpBarWrapper, XpBar, XpBarShield , QuestionsWrapper } from './style';

import questions from '../../services/questions.json'
import Ashield from '../../assets/ashield.png'

export function Trivia (){

  const [correctAnswers, setCorrectAnswers] = useState([])
  const [userXp, setUserXp] = useState(0)

  useEffect(() => {
    userLevelUp()
    console.log(correctAnswers)
  },[correctAnswers])

  function handleCorrectAnswers(id){
    if(correctAnswers.includes(id)) return;
    setCorrectAnswers([...correctAnswers,id])
  } 

  function userLevelUp(){
    const percentage = (correctAnswers.length * 100 ) / questions.length
    setUserXp(percentage)
    if(percentage === 100){
      alert('Parabens, você é um virgem')
    }
  }

  return (
    <TriviaContainer>
    <TriviaTitle >Fan's Trivia</TriviaTitle>
    <XpBarWrapper >
      <XpBar  style={{width:`${userXp}%`}}> 
        <XpBarShield  src={Ashield} />
      </XpBar>
    </XpBarWrapper>
    <QuestionsWrapper>
      {questions?.map((question) => {
          return <Question 
            handleCorrectAnswers={handleCorrectAnswers}
            question={question} 
            key={question?.id} 
          />
        })}

    </QuestionsWrapper>
  </TriviaContainer>
  )
}