import React from "react"
import './styles.css'

export function Toggle ({toggle, icon:Icon}){
  return (
    <div className="toggle" onClick={toggle}>{Icon}</div>
  )
}