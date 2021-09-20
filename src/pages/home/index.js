import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import WebFont from 'webfontloader'

import Ashield from '../../assets/ashield.png'

import './styles.css'
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
    WebFont.load({
      google: {
        families: ['Cabin', 'sans-serif']
      }
    })
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
    <body>
      <main className="main">
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
        <div className="button_container">
          <button className="meet_all_herous"><Link to="/characters">Meet their skills </Link></button>
        </div>

        <Carousel isLoading={isCharactersLoading} characters={characters}/>
      </div>
      <Trivia />
      <footer> <h1>Data provided by Marvel. © 2014 Marvel</h1></footer>
    </body>
  );
}
export default Home;

