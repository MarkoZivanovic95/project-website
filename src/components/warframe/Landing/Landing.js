import React,{Component} from 'react';
import './Landing.css'
import Music from '../MusicPlayer/MusicPlayer';
import Vid from '../../../vid/WebLanding.webm'

class Header extends Component{
    state={
        music:null,
        playMusic:'block',
        stopMusic:'none'
    }
    stopMusic=()=>{
        this.setState({music:<Music />})
        this.setState({playMusic:'none'})
        this.setState({stopMusic:'block'})
    }
    playMusic=()=>{
        this.setState({music:null})
        this.setState({playMusic:'block'})
        this.setState({stopMusic:'none'})
    }
    render(){
        return(
            <div className='warframeMain video-container' id='fixed'>
                <video autoPlay muted loop id="myVideo">
                    <source src={Vid} type="video/webm"/>
                </video>
                <h2>Warframe</h2>
                <i style={{display:this.state.playMusic}} class='far fa-play-circle fa-3x' onClick={this.stopMusic}></i>
                <i style={{display:this.state.stopMusic}} class='fas fa-pause fa-3x' onClick={this.playMusic}></i>
                {this.state.music}
            </div>
        )
    }
}

export default Header;