import React from 'react';

import Navigation from './Navigation/Navigation';
import Social from './Social/Social';
import Theme from './Theme/Theme';

import './FixElements.css';
import { getClassName } from '../../Shared/helperFunctions';

const FixElements = ({ theme, setTheme }) => {
    return (
        <div className={getClassName('fix-elements', theme)}>
            <Navigation theme={theme} />
            <Theme theme={theme} setTheme={setTheme} />
            <Social theme={theme} />

            <div className='small-bio'>
                <div>Fullstack Web Developer <br />
                    <span>from Hungary</span>
                </div>
            </div>
        </div>
    )
}

export default FixElements;
