// Write your Character component here
import React from 'react'
import styled from 'styled-components';


const StyledCharacterComponent = styled.div `
    color: white;
    background-color: darkgray;
    padding: 20px;
    text-align: center;
    width: 150px;
    height: 100px;
    opacity: 0.9;
    margin: 20px;
    border-style: solid;
    border-color: white;
    box-shadow: 0 0 10px #fff;
`

const Character = props => {
    const { info } = props

    return (

        <div className ='character-component'>
<StyledCharacterComponent>
            <h4>Name: { info.name }</h4>
            <div>

                <div className = 'character-information'>BirthDate: {info.birth_year} </div>
                <div className = 'character-information'>Gender: {info.gender} </div>
                
            </div>
            </StyledCharacterComponent>
        </div>
    )
}

export default Character