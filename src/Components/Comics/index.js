import React from "react";
import './styles.css'

import {getThumb, filterItemWithThumb} from '../../utils/thumbnail'



export function Comics ({isLoading,comics}){

  return (
    <div className="main_comics_container">
      {isLoading
        ? <div className="circle"></div>
        : comics
          .filter(comic => filterItemWithThumb(comic))
          .map((comic,index) => {
            const thumb = getThumb(comic)
            if(index > 4 ) return null;
            return(
              <div className="comics"
                    style={{backgroundImage:`url(${thumb})`}}>
              </div>
            )            
          })}
    </div>
  )
}