import React, { useEffect, useState } from "react";
import './styles.css'

export function Question ({question,handleCorrectAnswers}){

  const [hasBeenAnswer, setHasBeenAnswer] = useState(false)

  function handleAnswer(id){
    if(hasBeenAnswer) return
    setHasBeenAnswer(true)

    if(id === question?.correct_answer) {
      handleCorrectAnswers(question.id)
    }
  }

  function getAnswerColor(id){
    if(!hasBeenAnswer) return 'white'
    if(hasBeenAnswer && question?.correct_answer === id) return 'green'
    return 'red'
  }
  function getAnswerFontColor(id){
    if(!hasBeenAnswer) return 'black'
    if(hasBeenAnswer && question?.correct_answer === id) return 'white'
    return 'white'
  }

  return (
    <div className="trivia_questions_container">
      <h1>{question?.question}</h1>
      <div className="question">
        {question?.answers?.map(answer => {
          return <button 
            className="answer_button" 
            onClick={()=> handleAnswer(answer.id)} 
            style={{backgroundColor:getAnswerColor(answer?.id),color:getAnswerFontColor(answer?.id)}} 
            key={answer?.id}>{answer?.label}
          </button>
        })}
      </div>

    </div>
  )
}