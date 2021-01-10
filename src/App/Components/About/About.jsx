import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import { ABOUT_ME } from '../../Data/Constants';
import me from '../../Images/me.jpg';

import './About.css';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        marginRight: 20
    },
}));


const About = () => {
    const classes = useStyles();

    return (
        <div className='about'>
            <div className='content'>
                <div className='title'>
                    <Avatar alt='Daniel Kanyo' src={me} className={classes.large} />
                    <div>
                        about<span>me</span>
                    </div>
                </div>
                <div className='qoute-text'>
                    {ABOUT_ME}
                </div>
            </div>
        </div>
    )
}

export default About;
