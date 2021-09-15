import React from 'react'
import './styles.css'

import * as Icon from 'react-icons/md'
import * as Acon from 'react-icons/bs'


export function Sidebar ({isOpen}){
  return (
      <aside>
        <nav className={`${isOpen ? 'active' : ''} navigation`}>
          <ul>
            <li>
              <a href="#">
                <span className="icon"><Icon.MdHome/></span>
                <span className="title">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><Acon.BsShieldFill/></span>
                <span className="title">Heros</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"><Icon.MdHelp/></span>
                <span className="title">FAQ</span>
              </a>
            </li>
          </ul>
        </nav>
    </aside>
  )
}