import React from 'react';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';

import { GitHub } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';

import { SOCIAL_LINKS, SOCIALS, THEMES } from '../../../../Data/Constants';

import './Social.css';

const Social = ({ theme }) => {

    const getIcon = (id) => {
        switch (id) {
            case SOCIALS.GITHUB:
                return <GitHub className='social-icon' />;
            case SOCIALS.TWITTER:
                return <Twitter className='social-icon' />;
            case SOCIALS.FACEBOOK:
                return <Facebook className='social-icon' />;
            case SOCIALS.INSTAGRAM:
                return <Instagram className='social-icon' />;
            default:
                console.warn(`Unsupported social id: ${id}`);
                break;
        }
    }

    return (
        <div className={`social ${theme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK}`}>
            {
                SOCIAL_LINKS.map((item, i) => (
                    <Tooltip title={item.id.toUpperCase()} arrow placement='top' key={i}>
                        <Link href={item.url} target='_blank'>
                            {getIcon(item.id)}
                        </Link>
                    </Tooltip>
                ))
            }
        </div>
    )
}

export default Social;
