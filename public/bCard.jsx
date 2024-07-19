import React from 'react';
import './bCard.css';

const bCard = ({ imgprop, servprop }) => {
    return (
        <div className='card'>
            <img src={imgprop} alt={servprop} />
            <div className='intro'>
                <h1><em>{servprop}</em></h1>
                <p>Brève description du service en question. Quelques lignes pour attirer l'attention et résumer les autres sous-services.</p>
                <p>Sans être trop technique, mais suffisamment pour donner à la personne une idée du service. Justifier les coûts... </p>
                <ul>
                    <li>Possible</li>
                    <li>Pointform</li>
                    <li>de sous-services</li>
                </ul>
                <a className="nav-link" href="#experts">
                    <span className="servType"></span> 
                    <em>Experts</em>
                </a>
            </div>
        </div>
    )
}

export default bCard;
