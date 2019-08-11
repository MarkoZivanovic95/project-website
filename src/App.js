import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HydraLogo from './images/hydra.png'
import './App.css';
import Warframe from './container/Warframe/Warframe'
import Contact from './components/ContactUs/ContactUs'
import Minecraft from './container/Minecraft/Minecraft'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Gallery from './components/Gallery/Gallery'
import OtherGames from './components/OtherGames/OtherGames'

class App extends Component {
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
    1400:{items :6}
};
  state={
    images:[
      {
          game:"warframe",
          link:"https://store-images.s-microsoft.com/image/apps.34774.68123456111492710.e1f6f35b-515c-4d66-a5d9-fc894ac28b9d.6924caef-2bd7-40e1-9b86-3f4bcc4a74bc?mode=scale&q=90&h=1080&w=1920"
      },{
          game:"minecraft",
          link:"https://images-na.ssl-images-amazon.com/images/I/913LOf4vO3L.png"
      },{
          game:"Final fantasy",
          link:"https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/xiv.jpg?w=1920&ssl=1"
      },{
          game:"destiny 2",
          link:"https://store-images.s-microsoft.com/image/apps.57361.68655995542193491.caf9a2b8-1f59-43f3-99b8-54353060f6de.34e1f3a6-5f71-4ec3-b188-b8c28f77f3b7?mode=scale&q=90&h=1080&w=1920"
      }
    ],
    background:'black',
    h1Text:[['T',1],['e',2],['a',3],['m',4],['\xa0'],['H',5],['y',6],['d',7],['r',8],['a',9]],
    pText:[['C',1],['o',1.5],['m',2],['m',2.5],['u',3],['n',3.5],['i',4],['t',4.5],['y',5],['\xa0',5.5],['P',6],['a',6.5],['g',7],['e',7.5]],
  }
  headerBg=(game)=>{
    if(game==='warframe'){
      this.setState({background:'url(https://store-images.s-microsoft.com/image/apps.34774.68123456111492710.e1f6f35b-515c-4d66-a5d9-fc894ac28b9d.6924caef-2bd7-40e1-9b86-3f4bcc4a74bc?mode=scale&q=90&h=1080&w=1920)'})
    }
    if(game==='minecraft'){
      this.setState({background:'green'})
    } 
    if(game==='destiny 2'){
      this.setState({background:'blue'})
    } 
    if(game==='Final fantasy'){
      this.setState({background:'red'})
    }   
  }  
  render() {
    const hydraText=this.state.h1Text.map(letter=>
      <p style={{animation:`fadeIn ${letter[1]}s`,animationIterationCount:'1'}}>{letter[0]}</p>
    )
    const communityText=this.state.pText.map(letter=>
      <p style={{animation:`fadeIn ${letter[1]}s`,animationIterationCount:'1'}}>{letter[0]}</p>
    )
    const handleOnDragStart = e => e.preventDefault()
        const screenshots=this.state.images.map(screenshot=>
            <div>
              <div onDragStart={handleOnDragStart} style={{backgroundImage:`url(${screenshot.link})`,height:'250px',backgroundSize:'cover',borderRadius: '5px',cursor:'pointer' }}>
                <div className='gradient'><Link to={`/${screenshot.game}`}><p className="game" onClick={()=>this.headerBg(screenshot.game)}>{screenshot.game}</p></Link></div>
              </div>
          </div>
        )
    return(
    <Router>
      <div className='main'>
        <header className='header' style={{background:this.state.background}}>
            <div className='container'>
            <nav className="navbar navbar-expand-lg" id="navbar-js">
              <Link className="navbar-brand header-logo" to={'/'}><img src={HydraLogo} alt="" id="logo"  onClick={()=>{this.setState({background:'black'})}}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <div className="navbar-toggler-icon"></div>
                    <div className="navbar-toggler-icon"></div>
                    <div className="navbar-toggler-icon"></div>
                </button>
                <div className="navbar-collapse header-text collapse" id="collapsingNavbar">
                    <ul className="navbar-nav end">
                        <li className="nav-item header-padding">
                            <Link to={'/'} className="nav-link white"  onClick={()=>{this.setState({background:'black'})}}>ETC</Link>
                        </li>
                        <li className="nav-item header-padding">
                        <div className="dropdown">
                          <li className="dropbtn" onClick={()=>{this.setState({gameListStyle:{height:'100%',width:'65px',position:'fixed'}})}}>
                            Games
                          </li>
                          <div className="dropdown-content">
                          <Link to={'/warframe'} className="nav-link dropdown-item" onClick={()=>{this.setState({background:'url(https://store-images.s-microsoft.com/image/apps.34774.68123456111492710.e1f6f35b-515c-4d66-a5d9-fc894ac28b9d.6924caef-2bd7-40e1-9b86-3f4bcc4a74bc?mode=scale&q=90&h=1080&w=1920)'})}}>Warframe</Link>
                          <Link to={'/minecraft'} className="nav-link dropdown-item" onClick={()=>{this.setState({background:'green'})}}>Minecraft</Link>
                          <Link to={'/othergames'} className="nav-link dropdown-item"  onClick={()=>{this.setState({background:'black'})}}>Other games...</Link>
                          </div>
                        </div>
                        </li>
                        <li className="nav-item header-padding">
                            <Link to={'/gallery'}  className="nav-link white" onClick={()=>{this.setState({background:'black'})}}>Gallery</Link>
                        </li>
                        <li className="nav-item header-padding ">
                            <Link to={'/contact'} className="nav-link white"  onClick={()=>{this.setState({background:'#7289da'})}}>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </header>
        <div style={{paddingTop:'55px'}}>
          <Switch>
            <Route exact path='/'>
              <div className='home'>
                <div className='homeBg'></div>
                <h1>{hydraText}</h1>
                <h3>{communityText}</h3>
              </div>
              <div className='homeSecondBg'>
                <div className='text-center white' style={{paddingTop:'10%'}}>
                  <div>
                  <h2 style={{fontSize:'35px'}}>Welcome to Team Hydra</h2>
                  <p style={{fontSize:'30px'}}>Wanna be a part of a community with over 9000 players?<br/>spanning over 9000 games?</p>
                  </div>
                </div>
              </div>
              <div className='homeThirdBg tester'></div>
              <div style={{position:'relative'}}>
              <div className='homeCarousel'></div>
                <div style={{position:'absolute',top:'15%',width:'100%'}}>
                  <h2 className='text-center white' style={{fontSize:'35px'}}>Some of the games We play</h2>
                  <AliceCarousel 
                  responsive={this.responsive}
                  mouseDragEnabled
                  dotsDisabled >
                      {screenshots}
                  </AliceCarousel>
                  <br/>
                  <h3 className='text-center white' style={{fontSize:'30px'}}>And many more...</h3>
                </div>
              </div>
              <div className='homeAbout' style={{backgroundColor:'black',height:'450px'}}>
              <h3 className='text-center white' style={{fontSize:'30px'}}>About our community</h3>
              </div>
            </Route>
            <Route exact path='/contact' component={Contact} />
            <Route path='/warframe' component={Warframe} />
            <Route path='/minecraft' component={Minecraft} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/othergames' component={OtherGames} />
          </Switch>
        </div>
      </div>
    </Router>
    )
  };
}

export default App;