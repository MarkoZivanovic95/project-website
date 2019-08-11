import React,{Component} from 'react';
import WeaponServices from '../../services/WeaponServices';
import './Guides.css';
import FrameBuilds from '../../images/framebuilds.jpg';
import FrameServices from '../../services/FrameServices';
import Endo from './Endo';
import Fissure from './Fissure'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Guides extends Component{
    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
        1400:{items :6}
    };
    state={
        weapons:false,
        frames:[],
        selectFrame:[],
        isFrameSelected:false,
        framebuilds:{},
        primaryWeapons:[],
        selectedPrimaryWeapon:[],
        isPrimarySelected:false,
        secondaryWeapons:[],
        selectedSecondaryWeapon:[],
        isSecondarySelected:false,
        meleeWeapons:[],
        selectedMeleeWeapon:[],
        isMeleeSelected:false,
        guides: false,
        selectedGuide:''
    }
    weapons=()=>{
        this.setState(()=>({weapons: true}))
        this.setState({primaryWeapons:[]})
        this.setState({frames:null})
        this.setState({isFrameSelected:false})
        this.setState({isPrimarySelected:false})
        this.setState({secondaryWeapons:[]})
        this.setState({isSecondarySelected:false})
        this.setState({meleeWeapons:[]})
        this.setState({isMeleeSelected:false})
        this.setState({guides:false})
        this.setState({selectedGuide:''})
    }
    frames=()=>{
        this.setState(()=>({frames: FrameServices.getFrameBuilds()}))
        this.setState({weapons:null})
        this.setState({isFrameSelected:false})
        this.setState({weapons:false})
        this.setState({primaryWeapons:[]})
        this.setState({isPrimarySelected:false})
        this.setState({secondaryWeapons:[]})
        this.setState({isSecondarySelected:false})
        this.setState({meleeWeapons:[]})
        this.setState({isMeleeSelected:false})
        this.setState({guides:false})
        this.setState({selectedGuide:''})
    }
    guides=()=>{
        this.setState({guides:true})
        this.setState({frames:null})
        this.setState({weapons:null})
        this.setState({isFrameSelected:false})
        this.setState({weapons:false})
        this.setState({primaryWeapons:[]})
        this.setState({isPrimarySelected:false})
        this.setState({secondaryWeapons:[]})
        this.setState({isSecondarySelected:false})
        this.setState({meleeWeapons:[]})
        this.setState({isMeleeSelected:false})
        this.setState({selectedGuide:''})
    }
    selectGuide=(select)=>{
        this.setState({selectedGuide:`${select}`})
        this.setState({guides:false})
    }
    selectFrame=(id)=>{
        let selectedFrame=this.state.frames[id]
        this.setState({selectFrame:selectedFrame})
        this.setState({isFrameSelected:true})
        this.setState({frames:[]})
    }
    primaryWeapons=()=>{
        this.setState(()=>({primaryWeapons:WeaponServices.getPrimaryWeapons()}))
        this.setState({weapons:false})
    }
    secondaryWeapons=()=>{
        this.setState(()=>({secondaryWeapons:WeaponServices.getSecondaryWeapons()}))
        this.setState({weapons:false})
    }
    meleeWeapons=()=>{
        this.setState(()=>({meleeWeapons:WeaponServices.getMeleeWeapons()}))
        this.setState({weapons:false})
    }
    selectedPrimaryWeapon=(id)=>{
        let selectedPrimaryWeapon=this.state.primaryWeapons[id]
        this.setState({selectedPrimaryWeapon:selectedPrimaryWeapon})
        this.setState({primaryWeapons:[]})
        this.setState({isPrimarySelected:true})
    }
    selectedSecondaryWeapon=(id)=>{
        let selectedSecondaryWeapon=this.state.secondaryWeapons[id]
        this.setState({selectedSecondaryWeapon:selectedSecondaryWeapon})
        this.setState({secondaryWeapons:[]})
        this.setState({isSecondarySelected:true})
    }
    selectedMeleeWeapon=(id)=>{
        let selectedMeleeWeapon=this.state.meleeWeapons[id]
        this.setState({selectedMeleeWeapon:selectedMeleeWeapon})
        this.setState({meleeWeapons:[]})
        this.setState({isMeleeSelected:true})
    }
    render(){
        if(this.state.primaryWeapons){
            var primaryWeapons=this.state.primaryWeapons.map(primaryWeapon=>
                <div className='col-4 col-md-2'>
                    <div className='weapons' onClick={()=>this.selectedPrimaryWeapon(primaryWeapon.id)}>
                        <p>{primaryWeapon.name}</p>
                        <p>{primaryWeapon.drop}</p>
                    </div>
                </div>)
        }
        if(this.state.secondaryWeapons){
            var secondaryWeapons=this.state.secondaryWeapons.map(secondaryWeapon=>
                <div className='col-4 col-md-2'>
                    <div className='weapons' onClick={()=>this.selectedSecondaryWeapon(secondaryWeapon.id)}>
                        <p>{secondaryWeapon.name}</p>
                        <p>{secondaryWeapon.drop}</p>
                    </div>
                </div>)
        }
        if(this.state.meleeWeapons){
            var meleeWeapons=this.state.meleeWeapons.map(meleeWeapon=>
                <div className='col-4 col-md-2'>
                    <div className='weapons' onClick={()=>this.selectedMeleeWeapon(meleeWeapon.id)}>
                        <p>{meleeWeapon.name}</p>
                        <p>{meleeWeapon.drop}</p>
                    </div>
                </div>)
        }
        if(this.state.weapons){
            var weaponTypes=
            <div className='row text-center'>
                <div className='col-4' onClick={this.primaryWeapons}>
                    <div className='weaponTypes' onClick={this.primaryWeapons}>
                        <h4>Primary Weapons</h4>
                    </div>
                </div>
                <div className='col-4' onClick={this.secondaryWeapons}>
                    <div className='weaponTypes' onClick={this.secondaryWeapons}>
                        <h4>Secondary Weapons</h4>
                    </div>
                </div>
                <div className='col-4' onClick={this.meleeWeapons}>
                    <div className='weaponTypes' onClick={this.meleeWeapons}>
                        <h4>Melee</h4>
                    </div>
                </div>
            </div>
        }
        if(this.state.isPrimarySelected){
            var selectedPrimaryWeapon=
            <div className='row'>
                <div className='col-2'>
                    <h2>{this.state.selectedPrimaryWeapon.name}</h2>
                </div>
            </div>
        }
        if(this.state.isSecondarySelected){
            var selectedSecondaryWeapon=
            <div className='row'>
                <div className='col-2'>
                    <h2>{this.state.selectedSecondaryWeapon.name}</h2>
                </div>
            </div>
        }
        if(this.state.isMeleeSelected){
            var selectedMeleeWeapon=
            <div className='row'>
                <div className='col-2'>
                    <h2>{this.state.selectedMeleeWeapon.name}</h2>
                </div>
            </div>
        }
        if(this.state.frames){
            var frames=this.state.frames.map(frame=>
                <div className='col-4 col-md-2'>
                    <div className='frames' onClick={()=>this.selectFrame(frame.id)}>
                        <img src={frame.link}  alt=''/>
                        <p>{frame.frame}</p>
                    </div>
                </div>)
        }
        if(this.state.isFrameSelected){
            var selectedFrame=
            <div className='row col-12 text-center frame-build'>
                <div className='col-2'>
                    <img src={this.state.selectFrame.link}  alt=''/>
                </div>
                <div className='col-10 text-center'>
                    <h4>{this.state.selectFrame.frame}</h4>
                    <p>{this.state.selectFrame.text}</p>
                    <AliceCarousel>
                    <div>
                        <p>{this.state.selectFrame.build1Desc}</p>
                        <img src={this.state.selectFrame.build1} alt='' />
                    </div>
                    <div>
                        <p>{this.state.selectFrame.build2Desc}</p>
                        <img src={this.state.selectFrame.build2} alt='' />
                    </div>
                    <div>
                        <p>{this.state.selectFrame.build3Desc}</p>
                        <img src={this.state.selectFrame.build3} alt='' />
                    </div>
                    </AliceCarousel>
                    {/* <img src={this.state.selectFrame.build1} alt='' />
                    <img src={this.state.selectFrame.build2} alt='' />
                    <img src={this.state.selectFrame.build3} alt='' /> */}
                </div>
            </div>
        }
        if(this.state.guides){
            var selectGuide=
            <div className='row'>
                <div className='col-6'>
                    <div className='frame-builds' onClick={()=> this.selectGuide('Endo')}>
                        Endo Farming
                    </div>
                </div>
                <div className='col-6'>
                    <div className='frame-builds' onClick={()=> this.selectGuide('Fissures')}>
                        Fissures
                    </div>
                </div>
            </div>
        }
        if(this.state.selectedGuide==='Endo'){
            var selectedEndo=
                <Endo />
        }
        if(this.state.selectedGuide==='Fissures'){
            var selectedFissures=
            <Fissure />
        }
        return(
            <div className='guide text-center' id='guides'>
                <div className='container'>
                    <h2>Builds and Guides</h2>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='frame-builds' onClick={this.frames}>
                                <img src={FrameBuilds} alt=''/>
                                <p>Frame Builds</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='frame-builds' onClick={this.weapons}>
                                <img src={FrameBuilds} alt='' />
                                <p>Weapon Builds</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='frame-builds' onClick={this.guides}>
                                <img src={FrameBuilds} alt='' />
                                <p>Guides</p>
                            </div>
                        </div>
                        {primaryWeapons}
                        {secondaryWeapons}
                        {meleeWeapons}
                        {frames}
                        {selectedFrame}
                    </div>
                    {weaponTypes}
                    {selectedPrimaryWeapon}
                    {selectedSecondaryWeapon}
                    {selectedMeleeWeapon}
                    {selectGuide}
                    {selectedEndo}
                    {selectedFissures}
                </div>
            </div>
        )
    }
}

export default Guides;