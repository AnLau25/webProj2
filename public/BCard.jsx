import React from 'react';
import './BCard.css';
import GoldBtnBase from './GoldBtnBase';

const BCard = ({ imgprop, titleprop, langprop, authprop, genprop, sumprop }) => {
    return (
        <div className='BCard'>
            <img src={imgprop} alt={titleprop} />
            <div className='introB'>
                <h1>{titleprop} <em>({langprop})</em></h1>
                <p >{sumprop}</p>
                <div className='authgen'>
                    <p>Author: {authprop}</p>
                    <p>Genres: {genprop.join(', ')}</p>
                </div>
                <GoldBtnBase className='smol custom-bcard-button' prop="Borrow for a day" />
            </div>
        </div>
    );
}

export default BCard;
