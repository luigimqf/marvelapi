import styled from 'styled-components';

export const TriviaQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--dark-bg-color);
  transition: 0.3s;

  &:hover{
    border-bottom: 1px solid var(--dark-bg-color);
    border-bottom-color: #EE161F;
  }

`

export const Questions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
  width: 100%;
` 

export const QuestionsTitle = styled.h1`
  padding-top: 40px;
  font-weight: 800;
  font-size: 3rem;
  text-align: center;
` 

export const AnswerButton = styled.button`
  width: 150px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: var(--dark-bg-color);
  border: 3px solid #f39c12;
  border-radius: 20px;
  transition: 0.5s;
  text-align: center;
` 