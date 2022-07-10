import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    padding-left: 60px;

    overflow-x: auto;
    scroll-behavior: smooth;

    background-color: var(--dark-bg-color);

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 842px){
      padding:0;
    }
`

export const CardsHolder = styled.div`
    display:flex;

    @media (max-width: 842px){
      padding-left: 0px;
    }
  
` 

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

` 

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid var(--dark-bg-color);
  border-top-color: var(--light-bg-color);
  animation: spin 1s infinite;
` 


export const FrontCard = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;

` 

export const Overflow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`

export const OverflowTitle = styled.h1`
  color: white;
` 
export const Card = styled.div`
  width: 170px;
  height: 250px;
  flex: none;
  position: relative;

  border: 2.5px solid #f39c12;
  margin: 40px 20px ;

  transition: 0.5s;

  &:hover ${Overflow} {
    visibility: visible;
    opacity: 1;
  }

` 

export const ScrollButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-bg-color);
`


export const Button = styled.button`
  font-size: 3.5rem;
  background:none;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  color: var(--light-bg-color);
` 
