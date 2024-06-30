import React from 'react';
import './BglessBtn.css';
import { Button } from 'react-bootstrap';

const BglessBtn = ({ prop, onClick, href = '#' }) => {
    return (
        <div>
            <a href={href} onClick={(e) => { 
                    if (onClick) { 
                        e.preventDefault(); 
                        onClick(); 
                    } 
                }}>
                <Button type='button' className='bcustom-button'>
                    <h5 className='bcustom-button-title'>{prop}</h5>
                </Button>
            </a>
        </div>
    );
}

export default BglessBtn;
