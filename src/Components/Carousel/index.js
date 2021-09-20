import React,{useRef} from "react";
import * as Acon from 'react-icons/bs'
import {getThumb, filterItemWithThumb} from '../../utils/thumbnail'

import './styles.css'

export function Carousel ({isLoading,characters}){
  
  const carouselRef = useRef(null)  

  const handleLeftClick = (e) =>{
    e.preventDefault();
    carouselRef.current.scrollLeft -= carouselRef?.current?.offsetWidth;
  }
  const handleRightClick = (e) =>{
    e.preventDefault();
    carouselRef.current.scrollLeft += carouselRef?.current?.offsetWidth;
  }

  return (
    <div>
      <div className="card_container" ref={carouselRef}>
        <div className="cards_holder">
            {isLoading? 
            <div className="loading"> <div className="circle"></div> </div>:
            characters
              .filter(character => filterItemWithThumb(character))
              .map((character) => {
                const thumb = getThumb(character)
                return(
                  <div className="card">
                    <div 
                      className="front_card"
                      style={{backgroundImage:`url(${thumb})`}}
                    ></div>
                    <div className="overflow">
                      <h1 className="character_name">{`${character.name}`}</h1>
                    </div>
                  </div>
                )            
            })}

        </div>
      </div>
      <div className="scrollButtons">
        <button onClick={handleLeftClick} className="carouselScrollLeft"><Acon.BsArrowLeft/></button>
        <button onClick={handleRightClick} className="carouselScrollRight"><Acon.BsArrowRight/></button>
      </div>
    </div>

  )
}