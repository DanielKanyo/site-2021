import React from 'react';

import { NAVIGATION_ITEMS, THEMES } from '../../../../Data/Constants';

import './Navigation.css';

const Navigation = ({ theme }) => {
    return (
        <div className={`navigation ${theme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK}`}>
            <div className='home-btn'>
                daniel<div>kanyo</div>
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
