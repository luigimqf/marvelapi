import React,{useRef} from "react";

import * as Acon from 'react-icons/bs'

import { getThumb, filterItemWithThumb} from '../../utils/thumbnail'

import { 
  CardContainer, 
  CardsHolder, 
  Loading, 
  Circle, 
  Card,
  FrontCard,
  Overflow, 
  OverflowTitle, 
  ScrollButtons, 
  Button 
} from './styles'

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
      <CardContainer ref={carouselRef}>
        <CardsHolder>
            {isLoading? 
            <Loading> <Circle></Circle> </Loading>:
            characters
              .filter(character => filterItemWithThumb(character))
              .map((character) => {
                const thumb = getThumb(character)
                return(
                  <Card>
                    <FrontCard 
                      style={{backgroundImage:`url(${thumb})`}}
                    ></FrontCard>
                    <Overflow>
                      <OverflowTitle>{`${character.name}`}</OverflowTitle>
                    </Overflow>
                  </Card>
                )            
            })}

        </CardsHolder>
      </CardContainer>
      <ScrollButtons className="scrollButtons">
        <Button onClick={handleLeftClick} className="carouselScrollLeft"><Acon.BsArrowLeft/></Button>
        <Button onClick={handleRightClick} className="carouselScrollRight"><Acon.BsArrowRight/></Button>
      </ScrollButtons>
    </div>

  )
}