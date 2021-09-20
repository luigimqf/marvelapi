import React, { useEffect, useState, useRef } from 'react';

import './styles.css'
import {BiMouse} from 'react-icons/bi'

import { getCharacters } from '../../services/character';
import {getThumb, filterItemWithThumb} from '../../utils/thumbnail'
import { Link } from 'react-router-dom';

let carouselTimer = null

export function Characters(){

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const carouselRef = useRef(null)  

  useEffect(()=>{
    handleGetCharacters()
  },[])
  useEffect(()=>{
    carouselRef && handleCarouselScroll()

    return () => {
    console.log("🚀 ~ file: index.js ~ line 27 ~ useEffect ~ carouselRef", carouselRef)
      clearInterval(carouselTimer)
    }
  },[carouselRef])

  async function handleGetCharacters(){
    setIsLoading(true)
    try{
      const character = await getCharacters()
      setCharacters(character)
      console.log(character)
    } catch(error) {
    }
    setIsLoading(false)
  }

  const handleCarouselScroll = () =>{
    let counter = 0;
    carouselTimer = setInterval(() => {
      if(counter === 3) {
        carouselRef.current.scrollLeft -= carouselRef?.current?.offsetWidth * 2;
        counter = 0
        return
      }  
      carouselRef.current.scrollLeft += carouselRef?.current?.offsetWidth
      counter++
    }, 3000);
  }

  const getHandleStats = (max,min) => Math.floor(Math.random() * (max-min) + min )

  return(
    <div className="body">
      <header>
        <div className="carousel_caracters_container" ref={carouselRef}>
          <div className="carousel_caracters">
              {isLoading? 
                <div className="loading"> <div className="loading_circle"></div> </div>:
              characters
                .filter(character => filterItemWithThumb(character))
                .map((character) => {
                  const thumb = getThumb(character)
                  return(
                      <div 
                        className="characters"
                        style={{backgroundImage:`url(${thumb})`}}
                      ></div>

                    )            
                })}
              
          </div>
          <div className="overflo">
            <div className="overflow_info">
              <h1>Here are some of the Marvel's Heros and their skills</h1>
              <h2>This website was developed to all the Marvel's Fans to know some of the disadvantaged heros that we dont come along very easely. I hope all of you enjoy the site </h2>
              <Link to='/'>Go Back to Home</Link>
            </div>

          </div>
        </div>
      </header>
      <main>
        <div className="characters_info_container">
          {isLoading? 
              <div className="loading"> <div className="loading_circle"></div> </div>:
            characters
              .filter(character => filterItemWithThumb(character))
              .map((character,index) => {
                let defaultHeight = 150;
                let defaultWeight = 50;
                const increaser = 2;
                if(index > 0 ) {
                  defaultHeight = Math.floor(defaultHeight + ((defaultHeight * index) / 100))
                  defaultWeight = Math.floor(defaultWeight + ((defaultWeight * index)) / 100)
                  console.log(defaultWeight,defaultHeight)
                }  
                const thumb = getThumb(character)
                return(
                    <div className="character">
                      <div className="character_bg" style={{backgroundImage:`url(${thumb})`}}></div>
                      <div className="character_info">
                        <h1>{character.name}</h1>
                        <div>
                          <h2>Height:{defaultHeight}</h2>
                        </div>
                        <div>
                          <h2>Weight:{defaultWeight}</h2>
                        </div>
                        <div className="character_stats">
                          <div className="stats">
                            <div className="circe"><h1>{getHandleStats(0,5)}</h1></div>
                            <h2>Fight</h2>
                          </div>
                          <div className="stats">
                            <div className="circe"><h1>{getHandleStats(0,5)}</h1></div>
                            <h2>Intelligence</h2>
                          </div>
                          <div className="stats">
                            <div className="circe"><h1>{getHandleStats(0,5)}</h1></div>
                            <h2>Strength</h2>
                          </div>
                        </div>
                      </div>
                    </div>

                  )            
              })}
        </div>
        <div className="get_home">
          <BiMouse className="mouse"></BiMouse>
          <h6>Click in the heros carousel to get back at home page</h6>
        </div>

      </main>
      <footer className="char_footer">
        <h1>Data provided by Marvel. © 2014 Marvel</h1>
      </footer>
    </div>
  )
}