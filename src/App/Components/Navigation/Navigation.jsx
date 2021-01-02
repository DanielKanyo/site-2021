import React from 'react';

import { NAVIGATION_ITEMS } from '../../Data/Constants';

import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='home-btn'>
                daniel<div>kanyo</div>
            </div>
            <div className='line-container'>
            </div>
            <div className='items'>
                {
                    NAVIGATION_ITEMS.map((item, i) => {
                        return <div key={i}>{item}</div>;
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;
