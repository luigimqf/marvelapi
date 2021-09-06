import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import css from 'App.css'

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
  return (
    <body>
      <header></header>
    </body>
  );
}

export default App;
