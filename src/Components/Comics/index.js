import React from "react";

import { MainComicsContainer,SkeletonComic,Comic } from './style';

import {getThumb, filterItemWithThumb} from '../../utils/thumbnail'



export function Comics ({isLoading,comics}){

  return (
    <MainComicsContainer >
      {isLoading
        ? Array(6).fill(1).map(() => <SkeletonComic/>)
        : comics
          .filter(comic => filterItemWithThumb(comic))
          .map((comic,index) => {
            const thumb = getThumb(comic)
            if(index > 5 ) return null;
            return(
              <Comic 
                style={{backgroundImage:`url(${thumb})`}}>
              </Comic>
            )            
          })}
    </MainComicsContainer>
  )
}
