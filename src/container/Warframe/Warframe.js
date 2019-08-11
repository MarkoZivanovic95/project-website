import React, { Component } from 'react';
import Landing from '../../components/warframe/Landing/Landing';
import BriefDesc from '../../components/warframe/BriefDesc/BriefDesc';
import Screenshots from '../../components/warframe/Screenshots/Screenshots'
import AboutUs from '../../components/warframe/AboutUs/AboutUs';
import Members from '../../components/warframe/Members/Members';
import Join from '../../components/Join/Join'
// import Guides from '../../components/Guides/Guides';
import './Warframe.css';

class Warframe extends Component {
  render() {
    return (
      <div>
        <Landing />
        <BriefDesc />
        <div className='background-moon'>
          <Screenshots />
          <AboutUs />
        </div>
        <Members />
        {/* <Guides /> */}
        <div className='JoinWfBg' style={{position:'relative',color:'white',minHeight:'300px'}}>
          <Join />
        </div>
      </div>
       
    );
  }
}

export default Warframe;