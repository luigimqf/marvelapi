import React, { useEffect, useState } from "react";
import { TriviaQuestionContainer, Questions, QuestionsTitle, AnswerButton} from './style';

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
    <TriviaQuestionContainer >
      <QuestionsTitle>{question?.question}</QuestionsTitle>
      <Questions>
        {question?.answers?.map(answer => {
          return <AnswerButton 
            onClick={()=> handleAnswer(answer.id)} 
            style={{backgroundColor:getAnswerColor(answer?.id),color:getAnswerFontColor(answer?.id)}} 
            key={answer?.id}>{answer?.label}
          </AnswerButton>
        })}
      </Questions>

    </TriviaQuestionContainer>
  )
}