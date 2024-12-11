import React from 'react';
import './BCard.css';
import GoldBtnBase from './GoldBtnBase';
import { useTranslation } from 'react-i18next';

const BCard = ({ imgprop, titleprop, langprop, authprop, genprop, sumprop, index, updateBorrowStatus }) => {
    const [t, i18n] = useTranslation('global');
    const handleBorrowClick = () => {
        updateBorrowStatus(index);
    };
    

    return (
        <div className='BCard'>
            <img src={imgprop} alt={titleprop} />
            <div className='introB'>
                <h1>{titleprop} <em>({langprop})</em></h1>
                <p>{sumprop}</p>
                <div className='authgen'>
                    <p>Author: {authprop}</p>
                    <p>Genres: {genprop.join(', ')}</p>
                </div>
                <GoldBtnBase className='smol custom-bcard-button' prop={t('lib.btn')} onClick={handleBorrowClick} />
            </div>
        </div>
    );
}

export default BCard;
