import React,{Component} from 'react';
import './Screenshots.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Screenshots extends Component{
    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
        1400:{items :6}
      };
    state={
        screenshots:[
            'https://i.imgur.com/skpWlCQ.png',
            'https://i.imgur.com/MIBM3A4.png',
            'https://i.imgur.com/lZ50LDo.png',
            'https://i.imgur.com/5YfoVcA.png'           
        ]
    }
    render(){
        const handleOnDragStart = e => e.preventDefault()
        const screenshots=this.state.screenshots.map(screenshot=>
            <img src={screenshot} onDragStart={handleOnDragStart} alt ='' onClick={()=> window.open(`${screenshot}`, "_blank")}/>
        )
        return (
            <div className='screenshots text-center'>
                <h2>Dojo</h2>
                <AliceCarousel 
                responsive={this.responsive}
                mouseDragEnabled >
                    {screenshots}
                </AliceCarousel>
                <div className='row' style={{margin:'auto',width:'95%'}}>
                    <iframe className='ytObstacleCourse col-12 col-md-4' title="ObstacleCourse" src="https://www.youtube.com/embed/qDqmzbQOz4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className='ytObstacleCourse col-12 col-md-4' title="ObstacleCourse" src="https://www.youtube.com/embed/qDqmzbQOz4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className='ytObstacleCourse col-12 col-md-4' title="ObstacleCourse" src="https://www.youtube.com/embed/qDqmzbQOz4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Screenshots;