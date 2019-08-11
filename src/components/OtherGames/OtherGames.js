import React,{Component} from 'react'
import './OtherGames.css'
import Game from './Game/Game'
import OtherGamesServices from '../../services/OtherGamesServices'

class OtherGames extends Component{
    state={
        games:[]
    }
    componentDidMount(){
        this.setState({games:OtherGamesServices.getGames()})
    }
    render(){
        const games=this.state.games.map(game=>
            <Game
            link={game.link}
            name={game.name}
            />
        )
        return(
            <div className='othergames'>
                <div className='container'>
                    <h2 className='text-center'>Games We also play</h2>
                    <div className='row'>
                        {games}
                    </div>
                </div>
            </div>
        )
    }
}

export default OtherGames