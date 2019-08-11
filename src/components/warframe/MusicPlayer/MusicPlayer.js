import React,{Component} from 'react';
import SecondDream from '../../../music/TheSecondDreamTheme.mp3';

class Music extends Component {
    render(){
        return(
            <div>
                <audio autoPlay loop> 
                    <source src={SecondDream} />
                </audio>
            </div>
        )
    }
}

export default Music;