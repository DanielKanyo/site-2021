import React from 'react';

import Navigation from './Navigation/Navigation';
import Social from './Social/Social';
import Theme from './Theme/Theme';

import './FixElements.css';
import { NAVIGATION_ITEMS } from '../../Data/Constants';
import { getClassName } from '../../Shared/helperFunctions';

const FixElements = ({ theme, setTheme, index, setIndex }) => {

    const isActive = (num, i) => {
        return num === i ? 'active' : null;
    }

    return (
        <div className={getClassName('fix-elements', theme)}>
            <Navigation theme={theme} setIndex={setIndex} />
            <Theme theme={theme} setTheme={setTheme} />
            <Social theme={theme} />

            <div className='small-bio'>
                <div>Fullstack Web Developer <br />
                    <span>from Hungary</span>
                </div>
            </div>

            <div className='navigation-indicators'>
                <div className='indicator-container' onClick={() => setIndex(0)}>
                    <div className={isActive(0, index)}></div>
                </div>
                {
                    NAVIGATION_ITEMS.map((item, i) => {
                        return (
                            <div key={i} className='indicator-container' onClick={() => setIndex(i + 1)}>
                                <div className={isActive(i + 1, index)}></div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FixElements;
