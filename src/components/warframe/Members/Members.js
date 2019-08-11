import React,{Component} from 'react';
import Member from './Member/Member';
import MembersServices from '../../../services/MembersServices';
import './Members.css'

class Members extends Component{
    state={
        members:[],
        more:'More',
        iclass:'fas fa-arrow-down fa-3x',
        less:'less',
        style:'none',
        style2:'block'
    }
    componentDidMount(){
        this.setState(()=>({members: MembersServices.getMembers().slice(0,8)}))
    }
    more=()=>{
        this.setState(()=>({members: MembersServices.getMembers()}))
        this.setState({more:null})
        this.setState({iclass:'fas fa-arrow-up fa-3x'})
        this.setState({style:'block'})
        this.setState({style2:'none'})
    }
    less=()=>{
        this.setState(()=>({members: MembersServices.getMembers().slice(0,8)}))
        this.setState({more:'More'})
        this.setState({iclass:'fas fa-arrow-down fa-3x'})
        this.setState({style:'none'})
        this.setState({style2:'block'})
    }
    render(){
        const members=this.state.members.map(member=>
            <Member 
            id={member.id}
            memberImg={member.picture}
            name={member.name}
            rank={member.rank}
            text={member.description}
            />)
        return(
            <div className='members'>
                <div className='container'>
                    <div className='text-center'>
                        <h2>Our Members</h2>
                    </div>
                    <div className='row'>
                        {members}
                    </div>
                    <div className='text-center'>
                        <div style={{display:this.state.style2}}>
                            <i onClick={this.more} class={this.state.iclass}></i>
                            <p>{this.state.more}</p>
                        </div>
                        <div style={{display:this.state.style}}>
                            <i onClick={this.less} class={this.state.iclass}></i>
                            <p>{this.state.less}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Members;