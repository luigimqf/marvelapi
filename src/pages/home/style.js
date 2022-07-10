import styled from 'styled-components';

export const Body = styled.div`
  width: 100vw;
  background-color: var(--dark-bg-color);
  overflow-x: hidden;
` 

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50vh;
  background-color: var(--dark-bg-color);
  @media (max-width: 1024px){
    height: 40vh;
    flex-direction: column;
  }
` 

export const MainTitleWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 100px;


  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--dark-bg-color);
  filter: brightness(1.3);

  font-family: 'Cabin';

  @media (max-width: 1024px){
    clip-path: none;
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 768px){
    clip-path: none;
    flex-direction: column;
    padding-left: 0;
  }
  @media (max-width: 647px){
    clip-path: none;
    flex-direction: column;
    padding-left: 0;
  }
` 

export const MainImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`

export const MainImg = styled.img`
  width: 150px;
  aspect-ratio: 1/1;

  @media (max-width: 1024px){
    width: 100px;
    aspect-ratio: 1/1;
  }
  @media (max-width: 768px){
    width: 70px;
    aspect-ratio: 1/1;
  }
` 

export const MainTitle = styled.h1`
  font-size: clamp(3rem, 4vw, 5rem);
  text-align: center;
  color: var(--light-bg-color);

`

export const MainMinTitle = styled.h3`
  font-size: clamp(1rem, 3vw, 2rem);
  width: 90%;
  text-align: center;
  color: var(--light-bg-color);
`

export const CardWrapper = styled.div`
  display: flex;
  height: 25%;
  flex-direction: column;
  text-align: center;
  margin-top: 25px;
  z-index: 0;

`

export const MeetHero = styled.h1`
  color: white;
  margin-top: 20px;
  font-weight: 700;
  font-size: clamp(2.5rem,3vw,3.5rem);
  user-select: none;
  margin: auto;

`

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`

export const Button = styled.button`
  min-width: 10%;
  padding: 5px;
  border: 2px solid #f39c12;
  border-radius: 20px;
  background:none;
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
  color: var(--light-bg-color);
  
  a{
    text-decoration:none;
    color:white;
  }
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: flex-end;
  background-color: var(--light-bg-color);
`