import React from 'react';
import './BCard.css';
import GoldBtnBase from './GoldBtnBase';

const BCard = ({ imgprop, titleprop, langprop, sumprop }) => {
    return (
        <div className='BCard'>
            <img src={imgprop} alt={titleprop} />
            <div className='introB'>
                <h1>{titleprop}<em>({langprop})</em></h1>
                <p>{sumprop}</p>
                <GoldBtnBase className='smol' prop="Borrow for a day" />
            </div>
        </div>
    )
}

export default BCard;
