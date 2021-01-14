import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

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
                    With experience in web development and design, I maintain a healthy balance between functionality and visual impact in all my work.
                    I believe every piece of design can be a work of art.
                </div>
            </div>
        </div>
    )
}

export default About;
