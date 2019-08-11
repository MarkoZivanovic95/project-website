import React,{Component} from 'react';
import DojoServices from '../../../services/DojoServices';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Dojo.css'

class Dojo extends Component{
    
    state={
        dojoPictures:[]
    }
    componentDidMount(){
        this.setState(()=>({dojoPictures: DojoServices.getDojoPictures()}))
    }
    render(){
        const handleOnDragStart = e => e.preventDefault()
        const dojopictures=this.state.dojoPictures.map(dojopicture=>
            <img src={dojopicture.link} onDragStart={handleOnDragStart} alt='' onClick={()=> window.open(`${dojopicture.link}`, "_blank")} />
        )
        const item=dojopictures
        return(
            <div className='dojo text-center'>
                    <h2>Dojo</h2>
                <AliceCarousel 
                items={item}
                duration={400}
                autoPlay={true}
                startIndex = {1}
                fadeOutAnimation={true}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                mouseDragEnabled
                />
            </div>
        )
    }
}

export default Dojo;