import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { NAVIGATION_ITEMS } from '../../../Data/Constants';
import me from '../../../Images/me.jpg';

import './Navigation.css';

const Navigation = ({ index, setIndex }) => {
    console.log(index);
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
                        return (
                            <div key={i} onClick={() => { setIndex(i) }} className={i === index ? 'active' : null}>
                                {item}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;
