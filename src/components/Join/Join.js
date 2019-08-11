import React from 'react';
import './Join.css'
import Discord from '../../images/Discord.svg'

const Join=(props)=>(
    <div className='container'>
        <h3 className='text-center' style={{paddingTop:'25px',textDecoration:'underline'}}>Interested in joining?</h3>
        <div style={{paddingTop:'15px'}}>
            <p className='text-center'>Contact us through our Discord server</p>
            <div className='col-12 col-md-4' style={{margin:'auto'}}>
                <div className='discord row'>
                    <div className='col-6' style={{margin:'auto 0'}}>
                        <img src={Discord} alt='discord' style={{height:'inherit'}}></img>
                    </div>
                    <div className='col-6' style={{margin:'auto 0'}}>
                        <button onClick={()=> window.open(`https://discord.gg/JcAnEc5`, "_blank")}>Join</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Join;