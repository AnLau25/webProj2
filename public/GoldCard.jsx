import React from 'react';
import './GoldCard.css';

const GoldCard = () => {
    return (
        <div className='gold-card'>
            <h1 className='gold-card__header'><em>CONTACTEZ-NOUS</em></h1>
            <div className='gold-card__contact'>
                <ul className='gold-card__contact-list'>
                    <li className='gold-card__contact-list-item bold'>
                        <img src='wPhone.png' alt='Phone' />613 - 214 - 1031
                    </li>
                    <li className='gold-card__contact-list-item bold'>
                        <img src='wMSG.png' alt='Email' />Insertlogo@here.com
                    </li>
                    <li className='gold-card__contact-list-item gold-card__address'>
                        <img src='wLoc.png' alt='Location' />
                        <div>
                            <div>33 Rue Lamagie, K1K 3F3</div>
                            <div>55 Operator Priv, K1K 5C5</div>
                        </div>
                    </li>
                </ul>
                <div className='gold-card__socials'>
                    <a href='#'><img src='bLink.png' alt='LinkedIn' /></a>
                    <a href='#'><img src='bFace.png' alt='Facebook' /></a>
                    <a href='#'><img src='bTweet.png' alt='Twitter' /></a>
                    <a href='#'><img src='bInsta.png' alt='Instagram' /></a>
                </div>
            </div>
        </div>
    )
}

export default GoldCard