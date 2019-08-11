import React from 'react';
import './Member.css';

const Member=(props)=>(
    <div className='col-6 col-md-3'>
        <div className='member memberBgImage' style={{backgroundPosition:'center', backgroundImage:`url(${props.memberImg})`}} onClick={()=> window.open(`${props.memberImg}`, "_blank")}>
        <div className='memberGradient'>
            <h6>{props.name}</h6>
        </div>
        </div>
    </div>
)

export default Member;