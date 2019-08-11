import React from 'react';
import './BriefDesc.css';

const BriefDesc=(props)=>(
    <div className='desc'>
        <div className='container'>
            <div className='row briefdesc'>
                <div className='col-12 col-md-4'>
                    <div className='firstdesc'>
                        <i class="fas fa-user-friends fa-3x"></i>
                        <h3>Clan description</h3>
                        <p>We are a frendly clan, welcoming of both hardcore and casual players</p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='firstdesc'>
                        <i class="fas fa-user-friends fa-3x"></i>
                        <h3>Our goals</h3>
                        <p>Having fun</p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='firstdesc'>
                        <i class="fas fa-user-friends fa-3x"></i>
                        <h3>Meet new friends</h3>
                        <p>Meet old and new players alike,we have players that just started playing to players that are around since alpha</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default BriefDesc;