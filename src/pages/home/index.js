import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import WebFont from 'webfontloader'

import questions from '../../services/questions.json'

import {GoThreeBars} from 'react-icons/go'
import Ashield from '../../assets/ashield.png'

import './styles.css'
import { Sidebar } from '../../Components/Sidebar';
import { Toggle } from '../../Components/Toggle';
import { Comics } from '../../Components/Comics';
import { Carousel } from '../../Components/Carousel';
import { getCharacters } from '../../services/character';
import { getComics } from '../../services/comics';
import { Question } from '../../Components/Question';
import { Trivia } from '../../Components/Trivia';
// import { Trivia } from '../../Components/Trivia';

export function Home() {
  const [characters, setCharacters] = useState([])
  const [comics, setComics] = useState([])
  const [ísSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isCharactersLoading, setIsCharactersLoading] = useState(false)
  const [isComicLoading, setIsComicLoading] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [userXp, setUserXp] = useState(0)

  
  const publicKey = '7079651304a622a7d3578e229daabdda'
  const privateKey = 'd3ba697f2310e4c3fb30e40b2990e010d04e595a'
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey)

  useEffect(() => {
    handleGetCharacters()
    handleGetComics()
    WebFont.load({
      google: {
        families: ['Cabin', 'sans-serif']
      }
    })
  },[])

  
  useEffect(() => {
    userLevelUp()
    console.log(correctAnswers)
  },[correctAnswers])

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

  const toggleMenu = () => setIsSideBarOpen(!ísSideBarOpen)

  return (
    <body>
      <Sidebar isOpen={ísSideBarOpen}/>
      <Toggle icon={<GoThreeBars/>}  toggle={toggleMenu}/>
      <main>
        <Comics isLoading={isComicLoading} comics={comics} />

        <div className="main_title_container">
          <div className="main_img_container">
            <img 
              className="main_img" 
              src={Ashield}
              onDragStart={e => e.preventDefault()}
            />
          </div>
          <h1 className="main_title_h1">OVER 29.000+ COMICS</h1>
          <h3 className="main_title_h3">Read these digital comics over months</h3>
        </div>
      </main>

      <div className="cards_parent">
        <h1 className="meet_hero_title">Meet some of the Marvel's Heros</h1>
        <Carousel isLoading={isCharactersLoading} characters={characters}/>
      </div>
      {/* <Trivia user={userXp} correctAnswers={handleCorrectAnswers} questions={questions} /> */}
      <div className="trivia_container">
        <div className="trivia_h1_container"><h1>Fan Trivia</h1></div>
        <div className="xp_bar_container">
          <div className="xp_bar" style={{width:`${userXp}%`}}> 
            <img className="xp_bar_shield"  src={Ashield} />
          </div>
        </div>
            {questions?.map((question) => {
            return <Question 
              handleCorrectAnswers={handleCorrectAnswers}
              question={question} 
              key={question?.id} 
            />
          })}

      </div>
    </body>
  );
}
export default Home;

