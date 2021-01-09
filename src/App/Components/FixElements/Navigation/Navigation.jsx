import React from 'react';

import { getClassName } from '../../../Shared/helperFunctions';

import { NAVIGATION_ITEMS } from '../../../Data/Constants';

import './Navigation.css';

const Navigation = ({ theme, setIndex }) => {
    return (
        <div className={getClassName('navigation', theme)}>
            <div className='home-btn' onClick={() => { setIndex(0) }}>
                daniel<div>kanyo</div>
            </div>
            <div className='items'>
                {
                    NAVIGATION_ITEMS.map((item, i) => {
                        return <div key={i} onClick={() => { setIndex(i + 1) }}>{item}</div>;
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;
