import React from "react";
import { Question } from "../Question";
import './styles.css'

export function Trivia ({user,correctAnswers,questions}){
  return (
    <div className="trivia_container">
    <div><h1>Fan Trivia</h1></div>
    <div style={{width:'100%',height:'10px',backgroundColor:'white'}}>
      <div style={{width:`${user}%`,height:'100%',backgroundColor:'red'}}> </div>
    </div>
    {questions?.map((question) => {
      return <Question
        handleCorrectAnswers={correctAnswers}
        question={question} 
        key={question?.id} 
      />
    })}
  </div>
  )
}