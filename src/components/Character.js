// Write your Character component here
import React from 'react'
import styled from 'styled-components';


const Character = props => {
    const { info } = props

    return (

        <div className ='character-component'>

            <h4>Name: { info.name }</h4>
            <div>

                <div className = 'character-information'>BirthDate: {info.birth_year} </div>
                <div className = 'character-information'>Gender: {info.gender} </div>
                
            </div>
        </div>
    )
}

export default Character