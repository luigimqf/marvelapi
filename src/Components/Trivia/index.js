import React, { useEffect, useState } from 'react';
import { Question } from "../Question";
import './styles.css'

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
    <div className="trivia_container">
    <div className="trivia_h1_container"><h1>Fan's Trivia</h1></div>
    <div className="xp_bar_container">
      <div className="xp_bar" style={{width:`${userXp}%`}}> 
        <img className="xp_bar_shield"  src={Ashield} />
      </div>
    </div>
    <div className="question_container">
      {questions?.map((question) => {
          return <Question 
            handleCorrectAnswers={handleCorrectAnswers}
            question={question} 
            key={question?.id} 
          />
        })}

    </div>
  </div>
  )
}