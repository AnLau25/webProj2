import React from 'react';
import './GoldCard.css';
import GoldSep from './GoldSep';

const GoldCard = () => {
    return (
        <div className='gold-card'>
            <h1 className='gold-card__header'>CONTACTEZ-NOUS</h1>
            <div className='gold-card__contact'>
                <ul className='gold-card__contact-list'>
                    <li className='gold-card__contact-list-item bold'>
                        <img src='GTel.png' alt='Phone' />613 - 214 - 1031
                    </li>
                    <li className='gold-card__contact-list-item bold'>
                        <img src='GMail.png' alt='Email' />Insertlogo@here.com
                    </li>
                    <li className='gold-card__contact-list-item gold-card__address'>
                        <img src='GLoc.png' alt='Location' />
                        <div>
                            <div>33 Rue Lamagie, K1K 3F3</div>
                        </div>
                    </li>
                </ul>
                <GoldSep/>
                <div className='gold-card__socials'>
                    <a href='#'><img src='GInsta.svg' alt='Instagram' /></a>
                    <a href='#'><img src='GSnap.svg' alt='Snapchat' /></a>
                    <a href='#'><img src='GTweet.svg' alt='Twitter' /></a>
                    <a href='#'><img src='GPin.svg' alt='Pinterest' /></a>
                </div>
            </div>
        </div>
    )
}

export default GoldCard