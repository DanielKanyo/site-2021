import React from 'react';

import { getClassName } from '../../Shared/helperFunctions';

import './About.css';

const About = ({ theme }) => {
    return (
        <div className={getClassName('about', theme)}>
            <div className='content'>
                <div className='text'>
                    With experience in web development and design, I maintain a healthy balance between functionality and visual impact in all my work.
                    I believe every piece of design can be a work of art.
                </div>
            </div>

        </div>
    )
}

export default About;
