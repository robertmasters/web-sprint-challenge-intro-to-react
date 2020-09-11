import React, {useEffect, useState} from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'
import { BASE_URL } from '../src/index'
import styled from 'styled-components'

//centering header text
const StyledH1 = styled.h1 `
  text-align: center;
`
//aligining the whole page to the center
const StyledBody = styled.div `
  width: 80%;
  margin: 0 auto;
`
//making each component wrap and centered inside of the body
const StyledComponent = styled.div `
  display:flex;
  flex-flow: row wrap;
  /* margin: 10%; */
  justify-content: space-around;

  padding: 0px;
`

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
    <StyledBody>
      <div className="App">
        <StyledH1 className="Header">Characters</StyledH1>
      </div>

      <StyledComponent>
        {
          characters.map((info, i ) => (
            <Character key = {i} info = {info} />
          ))
        }
      </StyledComponent>
    </StyledBody>
  );
}

export default App;
