import React from 'react';
import './BCard.css';
import GoldBtnBase from './GoldBtnBase';

const BCardSp = ({ imgprop, titleprop, langprop, authprop, genprop, sumprop, index, updateBorrowStatus }) => {
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
                    <p>Autor: {authprop}</p>
                    <p>Genero: {genprop.join(', ')}</p>
                </div>
                <GoldBtnBase className='smol custom-bcard-button' prop="Borrow" onClick={handleBorrowClick} />
            </div>
        </div>
    );
}

export default BCardSp;
