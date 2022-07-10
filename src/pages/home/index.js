import React, { useEffect, useState } from 'react';
import md5 from 'md5';

import Ashield from '../../assets/ashield.png'

import { Body, Main , MainTitleWrapper, MainImgWrapper, MainImg,MainTitle , MainMinTitle, CardWrapper, MeetHero, SkillAnchor,ButtonWrapper,Button , Footer} from './style';

import { Comics } from '../../Components/Comics';
import { Carousel } from '../../Components/Carousel';
import { getCharacters } from '../../services/character';
import { getComics } from '../../services/comics';
import { Trivia } from '../../Components/Trivia';
import { Link } from 'react-router-dom';

export function Home() {
  const [characters, setCharacters] = useState([])
  const [comics, setComics] = useState([])
  const [isCharactersLoading, setIsCharactersLoading] = useState(false)
  const [isComicLoading, setIsComicLoading] = useState(false)

  
  const publicKey = '7079651304a622a7d3578e229daabdda'
  const privateKey = 'd3ba697f2310e4c3fb30e40b2990e010d04e595a'
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey)

  useEffect(() => {
    handleGetCharacters()
    handleGetComics()
  },[])

  async function handleGetComics(){
    setIsComicLoading(true)
    try{
      const comics = await getComics()
      setComics(comics)
    } catch(error) {
      console.error({error});
    }
    setIsComicLoading(false)
  }

  async function handleGetCharacters(){
    setIsCharactersLoading(true)
    try{
      const character = await getCharacters()
      setCharacters(character)
    } catch(error) {

    }
    setIsCharactersLoading(false)
  }


  return (
    <Body>
      <Main >
        <Comics isLoading={isComicLoading} comics={comics} />

        <MainTitleWrapper >
          <MainImgWrapper >
            <MainImg 
              src={Ashield}
              onDragStart={e => e.preventDefault()}
            />
          </MainImgWrapper>
          <MainTitle >OVER 29.000+ COMICS</MainTitle>
          <MainMinTitle >Read these digital comics over months</MainMinTitle>
        </MainTitleWrapper>
      </Main>

      <CardWrapper >
        <MeetHero >Meet some of the Marvel's Heros</MeetHero>
        <ButtonWrapper> 
          <Button ><Link to="/characters">Meet their skills </Link></Button>
        </ButtonWrapper>

        <Carousel isLoading={isCharactersLoading} characters={characters}/>
      </CardWrapper>
      <Trivia />
      <Footer> Data provided by Marvel. © 2014 Marvel</Footer>
    </Body>
  );
}
export default Home;

