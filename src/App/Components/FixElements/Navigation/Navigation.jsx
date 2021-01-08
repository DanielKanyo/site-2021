import React from 'react';

import { getClassName } from '../../../Shared/helperFunctions';

import { NAVIGATION_ITEMS } from '../../../Data/Constants';

import './Navigation.css';

const Navigation = ({ theme }) => {
    return (
        <div className={getClassName('navigation', theme)}>
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
