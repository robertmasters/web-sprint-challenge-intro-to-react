import React, {useEffect, useState} from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'
import { BASE_URL } from '../src/index'
import styled from 'styled-components'
const App = () => {

  const [characters, setCharacters] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(good => {
      setCharacters(good.data.results)
    })
    .catch(error => {
      console.log(error)
      debugger
    })
  }, [])


  return (
    <div>
      <div className="App">
        <h1 className="Header">Characters</h1>
      </div>

      <div>
        {
          characters.map((info, i ) => (
            <Character key = {i} info = {info} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
