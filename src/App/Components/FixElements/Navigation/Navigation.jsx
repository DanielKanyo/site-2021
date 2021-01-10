import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { NAVIGATION_ITEMS } from '../../../Data/Constants';
import me from '../../../Images/me.jpg';

import './Navigation.css';

const Navigation = ({ setIndex }) => {
    return (
        <div className='navigation'>
            <div className='home-btn' onClick={() => { setIndex(0) }}>
                <Avatar alt='Daniel Kanyo' src={me} />
                <div className='text'>
                    daniel<div>kanyo</div>
                </div>
            </div>
            <div className='items'>
                {
                    NAVIGATION_ITEMS.map((item, i) => {
                        return i !== 0 ? <div key={i} onClick={() => { setIndex(i) }}>{item}</div> : null;
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;
