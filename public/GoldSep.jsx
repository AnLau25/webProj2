import React from 'react';
import './GoldSep.css'; 
import symbol from './Symbol.svg'; 

const GoldSep = () => {
    return (
        <div className="GoldSep">
            <div className="dvdr">
                <div className="line"></div>
                <img src={symbol} alt="Symbol" className="symbol" />
                <div className="line"></div>
            </div>
        </div>
    );
}

export default GoldSep;
