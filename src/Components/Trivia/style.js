import styled from 'styled-components';


export const TriviaContainer = styled.div`
  padding-left: 60px;
  max-height: 800px;
  width: 100%;
  background-color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar{
  width: 10px;
}
  &::-webkit-scrollbar-track{
  border-radius: 5px;
  background-color:#151515;
}
  &::-webkit-scrollbar-thumb{
  border-radius: 5px;
  background-color:#E62429;
}

  @media (max-width: 1024px){
    padding-left: 0px;
  }
`

export const TriviaTitle = styled.h1`
  font-size: clamp(3rem,2vw, 3rem);
  padding: 30px 0;
  width: 60%;
  text-align: center;

  @media (max-width: 1024px){
    padding: 60px 0;
  }
`

export const XpBarWrapper = styled.div`
  height: 30px;
  width: 90%;
  background-color: #151515;
  border: 4px solid #f39c12;
  border-radius: 20px;
`

export const XpBar = styled.div`
  padding-left: 25px;
  height: 100%;
  background-color: #8e44ad;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
` 

export const XpBarShield = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
` 

export const QuestionsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 70%;
`