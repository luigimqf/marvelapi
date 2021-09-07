import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import css from './Styles/app.css'


function App() {

  const publicKey = '7079651304a622a7d3578e229daabdda'
  const privateKey = 'd3ba697f2310e4c3fb30e40b2990e010d04e595a'
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey)
  
  useEffect(() => {
    apiRequest()
  },[])

  const [data, setData] = useState([])

  async function apiRequest(){
    try{
      const {data} = await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1630935411823&apikey=7079651304a622a7d3578e229daabdda&hash=f40ee5c0eb250382dc4dbc7ec49a8593')
      console.log("🚀 ~ file: App.js ~ line 22 ~ apiRequest ~ data", data?.data?.results)
      setData(data)
      
    } catch(error) {
      console.error({error});
    }
  }

  function toggleMenu(){
    let nav = document.querySelector('.navigation')
    let toggle = document.querySelector('.toggle')
    nav.classList.toggle('active')
    toggle.classList.toggle('active')
  }
  return (
    <body>
      <header>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="title">Home</span>
                <span className="icon"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="title">Heros</span>
                <span className="icon"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="title">FAQ</span>
                <span className="icon"></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    <div className="toggle" onClick={toggleMenu}></div>
    </body>
  );
}

export default App;
