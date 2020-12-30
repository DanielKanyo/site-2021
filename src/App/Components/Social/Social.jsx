import React from 'react';

import { GitHub } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';

import './Social.css';

const Social = () => {
    return (
        <div className='social'>
            <div><GitHub className='social-icon' /></div>
            <div><Twitter className='social-icon' /></div>
            <div><Facebook className='social-icon' /></div>
        </div>
    )
}

export default Social
