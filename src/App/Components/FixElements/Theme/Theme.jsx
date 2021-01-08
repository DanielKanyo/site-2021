import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import { THEMES } from '../../../Data/Constants';

import { getClassName } from '../../../Shared/helperFunctions';

import './Theme.css';

const Theme = ({ theme, setTheme }) => {
    return (
        <div className={getClassName('themes', theme)}>
            <div className={theme === THEMES.LIGHT ? 'active' : ''} onClick={() => setTheme(THEMES.LIGHT)}>
                <Tooltip title={THEMES.LIGHT.toUpperCase()} arrow placement='top'>
                    <Brightness5Icon className='theme-icon light-theme' />
                </Tooltip>
            </div>
            <div className={theme === THEMES.DARK ? 'active' : ''} onClick={() => setTheme(THEMES.DARK)}>
                <Tooltip title={THEMES.DARK.toUpperCase()} arrow placement='top'>
                    <Brightness3Icon className='theme-icon dark-theme' />
                </Tooltip>
            </div>
        </div>
    )
}

export default Theme
