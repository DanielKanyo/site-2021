import React from 'react';
import { NAVIGATION_ITEMS } from '../../Data/Constants';

import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='home-btn'>
                dainel <span>kanyo</span>
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
