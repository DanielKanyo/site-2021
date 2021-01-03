import React from 'react';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import { THEMES } from '../../../../Data/Constants';

import './Theme.css';

const Theme = ({ theme, setTheme }) => {
    return (
        <div className={`themes ${theme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK}`}>
            <div className={theme === THEMES.LIGHT ? 'active' : ''} onClick={() => setTheme(THEMES.LIGHT)}>
                <Brightness5Icon className='theme-icon light-theme' />
            </div>
            <div className={theme === THEMES.DARK ? 'active' : ''} onClick={() => setTheme(THEMES.DARK)}>
                <Brightness3Icon className='theme-icon dark-theme' />
            </div>
        </div>
    )
}

export default Theme
