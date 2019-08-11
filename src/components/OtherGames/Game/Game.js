import React from 'react'
import './Game.css'

const Game=(props)=>(
    <div className='col-sm-6 col-md-4 col-lg-3 gameMg'>
        <div className='gameBg' style={{backgroundImage:`url(${props.link})`}}>
            <h4>{props.name}</h4>
        </div>
    </div>
)

export default Game